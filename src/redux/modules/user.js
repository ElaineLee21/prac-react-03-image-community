import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/app";

// action types
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
// const logIn = (user) => {
//   return {
//     type: LOG_IN,
//     user
//   }
// }
// 위 5줄은 아래 1줄과 기능이 같다

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState 잡아주기
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: "Elaine Lee",
};

// middelware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth
      .signInWithEmailAndPassword(id, pwd)
      .then((user) => {
        // Signed in
        console.log(user);

        dispatch(
          setUser({
            user_name: user.user.displayName,
            id: id,
            user_profile: "",
          })
        );
        history.push("/");
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);

        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({ user_name: user_name, id: id, user_profile: "" })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

// reducer
// const reducer = (state, action) => {
//   switch(action.type) {
//     case "LOG_IN" : {
//       state.user = action.user;
//     }
//   }
// }
// 위 6줄은 아래 6줄과 기능이 같다

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export하는 부분
const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
};

export { actionCreators };
