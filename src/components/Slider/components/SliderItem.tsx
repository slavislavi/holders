import React, {FC} from 'react';
import {Text, View, Image, useWindowDimensions} from 'react-native';

import {SliderItemProps} from '@components/Slider/types';
import {styles} from '@components/Slider/styles';

export const SliderItem: FC<SliderItemProps> = ({
  item: {image, title, description},
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={image}
        style={[styles.image, {width: width * 0.8}]}
        resizeMode='contain'
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
