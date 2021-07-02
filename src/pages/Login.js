import React from "react";
import { Text, Input, Grid, Button } from "../elements/index";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="18px 0px" size="36px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={() => {
              console.log("아이디 입력되었음");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            _onChange={() => {
              console.log("비밀번호 입력되었음");
            }}
          />
        </Grid>

        <Grid margin="30px 0px">
          <Button
            text="로그인하기"
            _onClick={() => {
              console.log("로그인 완료");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
