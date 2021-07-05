// 로그인, 회원가입할 때 아이디, 비밀번호 입력하는 칸을 만들어보아요

import React from "react";
import styled from "styled-components";
import { Text } from "./index";
import { Grid } from "../elements";

const Input = (props) => {
  const { label, placeholder, type, _onChange, multiLine } = props;

  // 중간에 && 어쩌고는 라벨 있을때에만 쓰게 하는거
  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={5}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요",
  type: "text",
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

// 아 태그 이름이 Input인데 왜 걍 const Input 안하냐? 컴포넌트 이름이랑 겹치면 안되기 때문,,
const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
