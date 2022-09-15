import React, {FC} from 'react';
import {Text, View, Image, useWindowDimensions} from 'react-native';
import {SliderItemType} from './types';
import {styles} from './styles';

export const SliderItem: FC<SliderItemType> = ({
  item: {image, title, description},
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={image}
        style={[styles.image, {width}]}
        resizeMode='contain'
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
