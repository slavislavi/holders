import React, {useState, useRef} from 'react';
import {FlatList, View, Animated} from 'react-native';

import {SliderItem} from './SliderItem';
import slides from './data';
import {styles} from './styles';

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) =>
    setCurrentIndex(viewableItems[0].index),
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          data={slides}
          renderItem={({item}) => <SliderItem item={item} />}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
    </View>
  );
};
