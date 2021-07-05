import React from "react";
import { Grid, Input, Button } from "../elements";

const CommentWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글을 입력해주세요"
          // value를 먹인 이유는 글씨가 제출되고 나면 지워지게 하기 위해서 그런 것이다.
        />
        <Button width="50px" margin="0px 2px 0px 2px">
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
