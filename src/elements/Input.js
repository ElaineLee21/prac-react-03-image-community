// 로그인, 회원가입할 때 아이디, 비밀번호 입력하는 칸을 만들어보아요

import React from "react";
import styled from "styled-components";
import { Text } from "./index";

const Input = (props) => {
  const { label, placeholder, _onChange } = props;

  return (
    <React.Fragment>
      <Text margin="2px">{label}</Text>
      <ElInput placeholder={placeholder} onChange={_onChange} />
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요",
  _onChange: () => {},
};

// 아 태그 이름이 Input인데 왜 걍 const Input 안하냐? 컴포넌트 이름이랑 겹치면 안되기 때문,,
const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
