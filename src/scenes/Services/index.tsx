import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Services: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
    </View>
  );
};
