import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BJobScreen from '../Information/BJob';
import YoutubeScreen from '../Information/Youtube';
import InsightScreen from '../Information/Insight';
import QuizScreen from '../Information/Quiz';
import MarketScreen from '../Information/Market';

const Tab = createMaterialTopTabNavigator();

const Information = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="알쓸B잡" component={BJobScreen} />
      <Tab.Screen name="유튜브" component={YoutubeScreen} />
      <Tab.Screen name="인사이트" component={InsightScreen} />
      <Tab.Screen name="퀴즈" component={QuizScreen} />
      <Tab.Screen name="마켓" component={MarketScreen} />
    </Tab.Navigator>
  );
};

export default Information;
