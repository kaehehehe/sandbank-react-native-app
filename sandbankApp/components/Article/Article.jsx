import React from 'react';
import { Text, Image, Share } from 'react-native';
import HeartIcon from '@expo/vector-icons/FontAwesome';
import ShareIcon from '@expo/vector-icons/Feather';

import * as S from './style';

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
    <S.Article>
      <Image source={{ uri: item.image }} style={{ width: 300, height: 180 }} />
      <S.Metadata>
        <S.UploadDate>{item.upload_date}</S.UploadDate>
        <S.Wrapper>
          <HeartIcon name="heart-o" size={18} color="#B1B1B3" />
          <S.LikeCnt>{item.like_cnt}</S.LikeCnt>
          <S.ShareWrapper onPress={() => onPressShare(item)}>
            <ShareIcon name="share" size={18} color="#B1B1B3" />
            <Text>공유하기</Text>
          </S.ShareWrapper>
        </S.Wrapper>
      </S.Metadata>
    </S.Article>
  );
};

export default Article;
