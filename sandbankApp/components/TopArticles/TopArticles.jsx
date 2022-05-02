import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image, View } from 'react-native';

import * as S from './style';

const TopArticles = ({ content }) => {
  const [activeSlide, setActiveSlide] = useState(0);

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
      <Pagination dotsLength={content.length} activeDotIndex={activeSlide} />
    </S.Container>
  );
};

export default TopArticles;
