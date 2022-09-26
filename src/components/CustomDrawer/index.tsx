import React, {FC} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {TextValues} from '@constants/TextValues';
import {styles} from './styles';

export const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  const drawerStackState =
    props.state.routes[props.state.index].name === 'DrawerStack' &&
    props.state.routes[props.state.index].state;

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <DrawerItem
        label={TextValues.AboutAppTitle}
        labelStyle={styles.label}
        focused={
          drawerStackState &&
          drawerStackState.routes[
            drawerStackState.index ? drawerStackState.index : 0
          ].name === 'About'
        }
        style={styles.drawerItem}
        onPress={() =>
          props.navigation.navigate('DrawerStack', {
            screen: TextValues.AboutAppTitle,
          })
        }
      />
    </DrawerContentScrollView>
  );
};
