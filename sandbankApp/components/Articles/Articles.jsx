import React, { useState } from 'react';
import { Button } from 'react-native';

import * as S from './style';
import Article from '../Article';

const Articles = ({ data }) => {
  const { title, type } = data.sector;
  const content = data.content;
  const [viewMore, setViewMore] = useState(false);
  const [btnTitle, setBtnTitle] = useState('더보기');

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

  const onPressBtn = () => {
    if (viewMore) {
      setBtnTitle('더보기');
      setViewMore(false);
    } else {
      setBtnTitle('접기');
      setViewMore(true);
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
      {viewMore
        ? content.map((item) => <Article key={item.id} item={item} />)
        : content
            .slice(0, 2)
            .map((item) => <Article key={item.id} item={item} />)}
      <S.ButtonWrapper>
        <Button title={btnTitle} onPress={onPressBtn} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Articles;
