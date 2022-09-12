import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Edit} from '@scenes/Edit';
import {Map} from '@scenes/Map';
import {Services} from '@scenes/Services';
import {AppIcons} from '@assets/images';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator
      initialRouteName='Services'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name='MY SERVICES'
        component={Services}
        options={{
          tabBarIcon({focused}) {
            return focused ? (
              <AppIcons.HomeFilled />
            ) : (
              <AppIcons.HomeOutlined />
            );
          },
        }}
      />
      <Screen
        name='ADD NEW SERVICE'
        component={Edit}
        options={{
          tabBarIcon({focused}) {
            return focused ? (
              <AppIcons.SettingFilled />
            ) : (
              <AppIcons.SettingOutlined />
            );
          },
        }}
      />
      <Screen
        name='SERVICES ON MAP'
        component={Map}
        options={{
          tabBarIcon({focused}) {
            return focused ? <AppIcons.MapFilled /> : <AppIcons.MapOutlined />;
          },
        }}
      />
    </Navigator>
  );
};
