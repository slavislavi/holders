import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';

import {THEME} from '@styles/theme';
import {HomeTabs} from './HomeTabs';
import {DrawerStack} from './DrawerStack';
import {BackButton} from '@components/BackButton';
import {CustomDrawer} from '@components/CustomDrawer';
import {RootDrawerProps} from './types';

const RootDrawer = createDrawerNavigator<RootDrawerProps>();

export const AppNavigation: FC = () => {
  const {Navigator, Screen} = RootDrawer;

  return (
    <NavigationContainer>
      <Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={({route}) => ({
          headerTitleAlign: 'center',
          headerTitle: getFocusedRouteNameFromRoute(route),
        })}>
        <Screen
          name='Home'
          component={HomeTabs}
          options={{
            headerStyle: {backgroundColor: THEME.HEADER_BG},
            headerTintColor: THEME.HEADER_TEXT,
          }}
        />
        <Screen
          name='DrawerStack'
          component={DrawerStack}
          options={{
            headerLeft: BackButton,
            headerStyle: {backgroundColor: THEME.HEADER_BG},
            headerTintColor: THEME.HEADER_TEXT,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
