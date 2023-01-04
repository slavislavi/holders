import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Edit} from '@scenes/Edit';
import {Map} from '@scenes/Map';
import {Services} from '@scenes/Services';
import {AppIcons} from '@assets/images';
import {styles} from '@router/styles';
import {TextValues} from '@constants/TextValues';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator
      initialRouteName={TextValues.ServicesTitle}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: styles.tabLabelActive.color,
        tabBarInactiveTintColor: styles.tabLabelInactive.color,
      }}>
      <Screen
        name={TextValues.ServicesTitle}
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
        name={TextValues.AddNewTitle}
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
        name={TextValues.MapTitle}
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
