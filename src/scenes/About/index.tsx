import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const About: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABOUT</Text>
    </View>
  );
};
