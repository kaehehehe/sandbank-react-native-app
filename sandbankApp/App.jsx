import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import InvestmentScreen from './screens/Investment';
import InfoScreen from './screens/Information';
import SettingScreen from './screens/Setting';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeScreen}
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { marginBottom: 10, fontSize: 14 },
          tabBarStyle: { height: 70 },
        })}
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="투자"
          component={InvestmentScreen}
          options={{
            title: '투자',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="trending-up-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="인포"
          component={InfoScreen}
          options={{
            title: '인포',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="설정"
          component={SettingScreen}
          options={{
            title: '설정',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
