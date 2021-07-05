import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, color, bg, is_float, children, margin, width } =
    props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick} color={color} bg={bg}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  _onClick: () => {},
  color: "#FFFFFF",
  bg: "#212121",
  is_float: false,
  children: null,
  margin: false,
  width: "100%",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 600;
  position: fixed;
  bottom: 50px;
  right: 16px;
  //text-align: center;
  //vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;
