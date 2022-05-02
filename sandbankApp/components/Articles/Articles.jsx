import React from 'react';

import * as S from './style';
import Article from '../Article';

const Articles = ({ data }) => {
  const { title, type } = data.sector;
  const content = data.content;

  const setBackgroundColor = (type) => {
    switch (type) {
      case 'News':
        return '#669cfc';
      case 'Youtube':
        return '#D93A19';
      case 'Report':
        return '#9794DB';
      default:
        break;
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.TypeWrapper color={setBackgroundColor(type)}>
          <S.Type>{type}</S.Type>
        </S.TypeWrapper>
      </S.Header>
      {content.map((item) => (
        <Article key={item.id} item={item} />
      ))}
    </S.Container>
  );
};

export default Articles;
