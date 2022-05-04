import React from 'react';
import { Linking } from 'react-native';

import * as S from './style';

const Subscribe = () => {
  return (
    <S.Subscribe>
      <S.Left>
        <S.SubText>매주 새로운 코인 지식을 드려요</S.SubText>
        <S.MainText>샌드뱅크 오리지널</S.MainText>
      </S.Left>
      <S.Right onPress={() => Linking.openURL('https://sandbank.io')}>
        <S.Button>구독하기</S.Button>
      </S.Right>
    </S.Subscribe>
  );
};

export default Subscribe;
