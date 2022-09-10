import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <Text style={styles.title}>HOME1</Text>
      <Text style={styles.title}>HOME222</Text>
      <Text style={styles.title}>HOME33333</Text>
    </View>
  );
};
