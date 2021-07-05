import React from "react";
import { Text, Input, Grid, Button } from "../elements/index";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setID] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 또는 비밀번호를 입력하지 않았습니다.");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다.");
    }

    dispatch(userActions.loginFB(id, pwd));
  };

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
            _onChange={(e) => {
              setID(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid margin="30px 0px">
          <Button
            text="로그인하기"
            _onClick={() => {
              console.log("로그인 완료");
              login();
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
