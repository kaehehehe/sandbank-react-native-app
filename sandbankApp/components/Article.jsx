import React from 'react';
import styled from 'styled-components/native';
import { Text, Image } from 'react-native';
import HeartIcon from '@expo/vector-icons/FontAwesome';
import ShareIcon from '@expo/vector-icons/Feather';

const Container = styled.View`
  margin-bottom: 20px;
`;

const Metadata = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UploadDate = styled.Text`
  font-size: 15px;
  color: gray;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const LikeCnt = styled.Text`
  margin: 0 5px;
`;

const Article = ({ item }) => {

  return (
    <Container>
      <Image source={{ uri: item.image }} style={{ width: 300, height: 180 }} />
      <Metadata>
        <UploadDate>{item.upload_date}</UploadDate>
        <Wrapper>
          <HeartIcon
            name="heart-o"
            size={18}
            color="#B1B1B3"
            onPress={onPressHeart}
          />

          <LikeCnt>{item.like_cnt}</LikeCnt>
          <ShareIcon name="share" size={18} color="#B1B1B3" />
          <Text>공유하기</Text>
        </Wrapper>
      </Metadata>
    </Container>
  );
};

export default Article;
