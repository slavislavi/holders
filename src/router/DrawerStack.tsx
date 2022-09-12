import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {About} from '@scenes/About';

const Stack = createStackNavigator();

export const DrawerStack: FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='About' component={About} options={{title: 'ABOUT APP'}} />
    </Navigator>
  );
};
