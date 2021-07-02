import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, color, bg } = props;

  return (
    <React.Fragment>
      <ElButton onClick={_onClick} color={color} bg={bg}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  color: "#FFFFFF",
  bg: "#212121",
};

const ElButton = styled.button`
  width: 100%;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
`;

export default Button;
