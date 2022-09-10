import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '@scenes/Home';
import {Edit} from '@scenes/Edit';
import {Map} from '@scenes/Map';

import {HomeTabProps} from './types';

const Tab = createBottomTabNavigator<HomeTabProps>();

export const HomeTabs = () => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='Home' component={Home} options={{title: 'KNOWN OBJECTS'}} />
      <Screen
        name='Edit'
        component={Edit}
        options={{title: 'ADD NEW OBJECT'}}
      />
      <Screen name='Map' component={Map} options={{title: 'OBJECTS ON MAP'}} />
    </Navigator>
  );
};
