import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {About} from '@scenes/About';
import {TextValues} from '@constants/TextValues';

const Stack = createStackNavigator();

export const DrawerStack: FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={TextValues.AboutAppTitle} component={About} />
    </Navigator>
  );
};
