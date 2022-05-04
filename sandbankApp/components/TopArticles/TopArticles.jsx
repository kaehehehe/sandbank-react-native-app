import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image, Linking, TouchableOpacity, View, Share } from 'react-native';
import HeartIcon from '@expo/vector-icons/FontAwesome';
import ShareIcon from '@expo/vector-icons/Feather';

import * as S from './style';

const TopArticles = ({ content }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [like, setLike] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL(content[activeSlide].link)}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 300, height: 180 }}
          />
        </TouchableOpacity>
        <S.ArticleTitleWrapper>
          <S.ArticleTitle>{item.title}</S.ArticleTitle>
        </S.ArticleTitleWrapper>
      </View>
    );
  };

  const onPressShare = async () => {
    try {
      const result = await Share.share({
        message: content[activeSlide].link,
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
    <S.Container>
      <S.Header>
        <S.Title>새로 올라왔어요</S.Title>
        <S.TypeWrapper>
          <S.Type>New</S.Type>
        </S.TypeWrapper>
      </S.Header>
      <Carousel
        data={content}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <S.Pagination>
        <Pagination dotsLength={content.length} activeDotIndex={activeSlide} />
        <S.Icons>
          <S.LikeWrapper onPress={() => setLike(!like)}>
            {like ? (
              <HeartIcon name="heart" size={30} color="red" />
            ) : (
              <HeartIcon name="heart-o" size={30} color="#B1B1B3" />
            )}
          </S.LikeWrapper>
          <TouchableOpacity onPress={() => onPressShare()}>
            <ShareIcon name="share" size={30} color="#B1B1B3" />
          </TouchableOpacity>
        </S.Icons>
      </S.Pagination>
    </S.Container>
  );
};

export default TopArticles;
