import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';
import { useQuery } from 'react-query';

import * as S from './style';
import OpinionScreen from './screens/Opinion';
import YoutubeScreen from './screens/Youtube';
import InsightScreen from './screens/Insight';
import QuizScreen from './screens/Quiz';
import MarketScreen from './screens/Market';

const Tab = createMaterialTopTabNavigator();

const Information = () => {
  const fetchData = async () => {
    try {
      return await axios.get('https://test.daground.io/info/contents', {
        headers: {
          'TEST-AUTH': 'sandbankfrontend',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const { isLoading, data } = useQuery('data', fetchData);

  if (isLoading) {
    return (
      <S.Loading>
        <S.LoadingText>Loading...</S.LoadingText>
      </S.Loading>
    );
  }

  const filterData = (name, data) => {
    if (data) {
      let content;
      let result;
      switch (name) {
        case '알쓸B잡':
          content = data.content.filter((item) => item.sector_id === 1);
          result = { sector: data.sector[0], content: content };
          return result;
        case '유튜브':
          content = data.content.filter((item) => item.sector_id === 2);
          result = { sector: data.sector[1], content: content };
          return result;
        case '인사이트':
          content = data.content.filter((item) => item.sector_id === 3);
          result = { sector: data.sector[2], content: content };
          return result;
        default:
          break;
      }
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="알쓸B잡"
        children={() => (
          <OpinionScreen data={filterData('알쓸B잡', data.data)} />
        )}
      />
      <Tab.Screen
        name="유튜브"
        children={() => (
          <YoutubeScreen data={filterData('유튜브', data.data)} />
        )}
      />
      <Tab.Screen
        name="인사이트"
        children={() => (
          <InsightScreen data={filterData('인사이트', data.data)} />
        )}
      />
      <Tab.Screen name="퀴즈" component={QuizScreen} />
      <Tab.Screen name="마켓" component={MarketScreen} />
    </Tab.Navigator>
  );
};

export default Information;
