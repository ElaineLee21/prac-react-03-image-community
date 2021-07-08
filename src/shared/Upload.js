import React from "react";
import { Button } from "../elements";
import { storage } from "./firebase";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);

  const fileInput = React.useRef();
  const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.
    console.log(e.target.files);
    // 선택한 파일이 어떻게 저장되어 있나 봅시다.
    console.log(e.target.files[0]);

    // ref로도 확인해봅시다. :)
    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = e.target.files[0];

    // 파일 내용을 읽어옵니다.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러예요! :)
    reader.onloadend = () => {
      // reader.result는 파일의 컨텐츠(내용물)입니다!
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current?.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);

    //   업로드!
    _upload.then((snapshot) => {
      console.log(snapshot);

      // 업로드한 파일의 다운로드 경로를 가져오자!
      snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <React.Fragment>
      <input
        type="file"
        ref={fileInput}
        onChange={selectFile}
        disabled={is_uploading}
        accept="image/*"
      />
    </React.Fragment>
  );
};

export default Upload;
