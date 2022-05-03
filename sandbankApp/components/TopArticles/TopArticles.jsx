import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image, View } from 'react-native';
import HeartIcon from '@expo/vector-icons/FontAwesome';
import ShareIcon from '@expo/vector-icons/Feather';

import * as S from './style';

const TopArticles = ({ content }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [like, setLike] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ width: 300, height: 180 }}
        />
        <S.ArticleTitleWrapper>
          <S.ArticleTitle>{item.title}</S.ArticleTitle>
        </S.ArticleTitleWrapper>
      </View>
    );
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
        loop
        autoplay
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
          <ShareIcon name="share" size={30} color="#B1B1B3" />
        </S.Icons>
      </S.Pagination>
    </S.Container>
  );
};

export default TopArticles;
