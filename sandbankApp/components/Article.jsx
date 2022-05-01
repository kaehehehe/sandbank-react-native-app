import React from 'react';
import styled from 'styled-components/native';
import { Text, Image, TouchableOpacity, Share } from 'react-native';
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

const ShareWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Article = ({ item }) => {
  const onPressShare = async () => {
    try {
      const result = await Share.share({
        message: item.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('activityType!');
        } else {
          console.log('Share!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Image source={{ uri: item.image }} style={{ width: 300, height: 180 }} />
      <Metadata>
        <UploadDate>{item.upload_date}</UploadDate>
        <Wrapper>
          <HeartIcon name="heart-o" size={18} color="#B1B1B3" />
          <LikeCnt>{item.like_cnt}</LikeCnt>
          <ShareWrapper onPress={() => onPressShare(item)}>
            <ShareIcon name="share" size={18} color="#B1B1B3" />
            <Text>공유하기</Text>
          </ShareWrapper>
        </Wrapper>
      </Metadata>
    </Container>
  );
};

export default Article;
