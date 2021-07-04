import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src}></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "Elaine Lee",
    user_profile:
      "https://elaineimages.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20210702_191310693.jpg",
  },
  image_url:
    "https://elaineimages.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20210702_191310693.jpg",
  contents: "Want some acorns!",
  comment_cnt: 10,
  insert_dt: "2021-07-02 16:57:00",
};

export default Post;
