import React from 'react';
import { Text } from 'react-native';

import * as S from './style';

const TopArticles = ({ content }) => {
  const filterTopArticles = () => {
    const result = content.filter((item) => item.like_top === 1);
    return result;
  };
  
  return (
    <S.Container>
      <S.Header>
        <S.Title>새로 올라왔어요</S.Title>
        <S.TypeWrapper>
          <S.Type>New</S.Type>
        </S.TypeWrapper>
      </S.Header>
      {filterTopArticles(content).map((item) => (
        <Text key={item.id}>{item.id}</Text>
      ))}
    </S.Container>
  );
};

export default TopArticles;
