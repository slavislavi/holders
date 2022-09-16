import React, {FC} from 'react';
import {View, Animated, useWindowDimensions} from 'react-native';

import {PaginatorProps} from '@components/Slider/types';
import {styles} from '@components/Slider/styles';

export const Paginator: FC<PaginatorProps> = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.paginatorWrapper}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp', // если убрать clamp, то будут видны только три точки
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};
