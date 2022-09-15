import React, {FC} from 'react';
import {View} from 'react-native';

import {Slider} from '@components/Slider';
import {styles} from './styles';

export const About: FC = () => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};
