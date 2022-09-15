import React, {FC} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  const drawerStackState =
    props.state.routes[props.state.index].name === 'DrawerStack' &&
    props.state.routes[props.state.index].state;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label='ABOUT APP'
        focused={
          drawerStackState &&
          drawerStackState.routes[
            drawerStackState.index ? drawerStackState.index : 0
          ].name === 'About'
        }
        onPress={() =>
          props.navigation.navigate('DrawerStack', {screen: 'ABOUT APP'})
        }
      />
    </DrawerContentScrollView>
  );
};
