import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconF from '@expo/vector-icons/Feather';
import IconS from '@expo/vector-icons/SimpleLineIcons';

import { QueryClient, QueryClientProvider } from 'react-query';

import HomeScreen from './screens/Home';
import InvestmentScreen from './screens/Investment';
import InfoScreen from './screens/Information';
import SettingScreen from './screens/Setting';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={InfoScreen}
          screenOptions={() => ({
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: { marginBottom: 8, fontSize: 13 },
            tabBarStyle: { height: 60 },
          })}
        >
          <Tab.Screen
            name="홈"
            component={HomeScreen}
            options={{
              title: '홈',
              tabBarIcon: ({ color, size }) => (
                <IconF name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="투자"
            component={InvestmentScreen}
            options={{
              title: '투자',
              tabBarIcon: ({ color, size }) => (
                <IconF name="trending-up" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="인포"
            component={InfoScreen}
            options={{
              title: '인포',
              tabBarIcon: ({ color, size }) => (
                <IconS name="chart" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="설정"
            component={SettingScreen}
            options={{
              title: '설정',
              tabBarIcon: ({ color, size }) => (
                <IconF name="settings" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
