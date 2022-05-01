import React from 'react';
import { FlatList } from 'react-native';

import * as S from './style';
import Article from '../../../../components/Article';

const Opinion = ({ data }) => {
  const { title, type } = data.sector;

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.TypeWrapper>
          <S.Type>{type}</S.Type>
        </S.TypeWrapper>
      </S.Header>
      <FlatList data={data.content} renderItem={Article}></FlatList>
    </S.Container>
  );
};

export default Opinion;
