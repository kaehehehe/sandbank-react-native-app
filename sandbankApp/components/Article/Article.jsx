import React, { useState } from 'react';
import { Text, Image, Share, Linking, TouchableOpacity } from 'react-native';
import HeartIcon from '@expo/vector-icons/FontAwesome';
import ShareIcon from '@expo/vector-icons/Feather';

import * as S from './style';

const Article = ({ item }) => {
  const [like, setLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(item.like_cnt);

  const onPressLike = () => {
    setLike(!like);
    setLikeCnt(likeCnt + 1);
  };

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
      <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          style={{ width: '100%', height: 200 }}
        />
      </TouchableOpacity>
      <S.Metadata>
        <S.UploadDate>{item.upload_date}</S.UploadDate>
        <S.Wrapper>
          <S.LikeWrapper onPress={onPressLike}>
            {like ? (
              <HeartIcon name="heart" size={18} color="red" />
            ) : (
              <HeartIcon name="heart-o" size={18} color="#B1B1B3" />
            )}
            <S.LikeCnt>{likeCnt}</S.LikeCnt>
          </S.LikeWrapper>
          <S.ShareWrapper onPress={() => onPressShare()}>
            <ShareIcon name="share" size={18} color="#B1B1B3" />
            <Text>공유하기</Text>
          </S.ShareWrapper>
        </S.Wrapper>
      </S.Metadata>
    </S.Article>
  );
};

export default Article;
