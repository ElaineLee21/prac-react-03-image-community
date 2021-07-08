import React from "react";
import { Grid, Image, Text } from "../elements";
import HeartButton from "./HeartButton";
import styled from "styled-components";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="0px 10px" margin="10px 0px 0px 0px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>

        <Grid padding="0px 10px" margin="0px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>

        <Grid padding="0px 10px">
          <Text margin="15px 0px 30px 0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>

        <Grid is_flex padding="0px 10px" margin="0px 0px 20px 0px">
          <Text margin="0px" bold>
            좋아요 {props.like_cnt}개
          </Text>
          <HeartButton></HeartButton>
        </Grid>
      </Grid>
      <BorderLine />
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

const BorderLine = styled.hr`
  margin: 0px 10px 0px 10px;
  border: solid 0.1px #c4c4c4;
`;

export default Post;
