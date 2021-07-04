import React from "react";
import { Grid, Text, Button } from "../elements";
import Permit from "../shared/Permit";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

// Grid에 props로 있는 is_flex를 빼고 브라우저 새로고침 해보세여! 저새끼를 왜 써줘야하는지 직빵으로 알게됨
const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  // 로그인 했다면 세션키가 뜰 것. 얘를 이용해서 아래 조건문을 쓴다
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  // 세션에 정보 잘 들어가있는지 확인
  // console.log(sessionStorage.getItem(_session_key));

  // if (is_login && is_session) {
  //   return (
  //      아래 Permit컴포에 안긴 코드들이 원래 여기있었음
  //   );
  // }

  // 로그인했을때만 보여주는 화면. 쿠키가 있으면 true 없으면 false
  if (is_login && is_session) {
    return (
      <Permit>
        <React.Fragment>
          <Grid is_flex padding="4px 16px">
            <Grid>
              <Text margin="0px" size="24px" bold>
                Image & Communication
              </Text>
            </Grid>
            <Grid is_flex>
              <Button bg="#C4C4C4" color="#212121" text="내 정보"></Button>
              <Button bg="#C4C4C4" color="#212121" text="알림"></Button>
              <Button
                bg="#C4C4C4"
                color="#212121"
                text="로그아웃"
                _onClick={() => {
                  dispatch(userActions.logoutFB());
                }}
              ></Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Permit>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            Image & Communication
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            bg="#C4C4C4"
            color="#212121"
            text="로그인"
            _onClick={() => {
              history.push("./login");
            }}
          ></Button>
          <Button
            bg="#C4C4C4"
            color="#212121"
            text="회원가입"
            _onClick={() => {
              history.push("./signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};
// 로그인 기능 구현하면서 {} 채울것

export default Header;
