import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import moment from "moment";
import { actionCreators as imageActions } from "./image";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// initialState 만들기
const initialState = {
  list: [],
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "Elaine Lee",
  //   user_profile:
  //     "https://elaineimages.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20210702_191310693.jpg",
  // },
  image_url:
    "https://elaineimages.s3.ap-northeast-2.amazonaws.com/474px-Joaqu%C3%ADn_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    // getState()로 store의 상태값에 접근할 수 있어요!
    const _image = getState().image.preview;

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              // 아이디를 추가해요!
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              // 이제 리덕스에 넣어봅시다.
              dispatch(addPost(post));
              history.replace("/");
              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              window.alert("포스트 작성에 문제가 발생했습니다.");
              console.log("post 작성을 실패했습니다.", err);
            });
        })
        .catch((err) => {
          window.alert("이미지 업로드에 문제가 발생했습니다.");
          console.log(err);
        });
    });
  };
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];

      docs.forEach((doc) => {
        // 데이터 모양을 맞춰주자!
        let _post = doc.data();

        // ['comment_cnt', 'contents', ...]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });

      // 리스트 확인하기!
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        // unshift는 배열 맨 앞에 데이터를 넣어줘요!
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
