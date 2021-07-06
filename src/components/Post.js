import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="10px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>

        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="4px 10px" margin="0px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid padding="0px 10px">
          <Text margin="0px 0px 30px 0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
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
    "https://elaineimages.s3.ap-northeast-2.amazonaws.com/474px-Joaqu%C3%ADn_Sorolla_y_Bastida_-_Strolling_along_the_Seashore_-_Google_Art_Project.jpg",
  contents: "Great painting!",
  comment_cnt: 10,
  insert_dt: "2021-07-02 16:57:00",
};

export default Post;
