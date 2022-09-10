import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {About} from '@scenes/About';
import {DrawerStackProps} from './types';

const Stack = createNativeStackNavigator<DrawerStackProps>();

export const DrawerStack: FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="About" component={About} options={{title: 'ABOUT APP'}} />
    </Navigator>
  );
};
