import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '@scenes/Home';
import {Edit} from '@scenes/Edit';
import {Map} from '@scenes/Map';
import {About} from '@scenes/About';

const Stack = createNativeStackNavigator<StackProps>();

export type StackProps = {
  Home: {title: string} | undefined;
  Edit: {title: string} | undefined;
  Map: {title: string} | undefined;
  About: {title: string} | undefined;
};

export default function AppNavigation() {
  const {Navigator, Screen} = Stack;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'dimgrey',
          },
          headerTintColor: 'grey',
          headerTitleStyle: {
            fontFamily: 'roboto',
            fontWeight: '400',
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{title: 'KNOWN OBJECTS'}}
        />
        <Screen
          name="Edit"
          component={Edit}
          options={{title: 'ADD NEW OBJECT'}}
        />
        <Screen
          name="Map"
          component={Map}
          options={{title: 'OBJECTS ON MAP'}}
        />
        <Screen name="About" component={About} options={{title: 'ABOUT APP'}} />
      </Navigator>
    </NavigationContainer>
  );
}
