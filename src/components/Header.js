import React from "react";
import { Grid, Text, Button } from "../elements";

// Grid에 props로 있는 is_flex를 빼고 브라우저 새로고침 해보세여! 저새끼를 왜 써줘야하는지 직빵으로 알게됨
const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            사이트 이름을 넣어보자!!!!!
          </Text>
        </Grid>
        <Grid is_flex>
          <Button bg="#C4C4C4" color="#212121" text="로그인"></Button>
          <Button bg="#C4C4C4" color="#212121" text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};
// 로그인 기능 구현하면서 {} 채울것

export default Header;
