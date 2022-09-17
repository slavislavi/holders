import React, {useState, useRef} from 'react';
import {FlatList, View, Animated, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SliderItem} from '@components/Slider/components/SliderItem';
import {Paginator} from '@components/Slider/components/Paginator';
import {NextButton} from '@components/Slider/components/NextButton';

import {slides} from '@components/Slider/data';
import {styles} from '@components/Slider/styles';
import {SliderItemType} from '@components/Slider/types';

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({viewableItems}: any) =>
    setCurrentIndex(viewableItems[0].index),
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderItem: ListRenderItem<SliderItemType> = ({item}) => (
    <SliderItem item={item} />
  );

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('Home', {screen: 'Services'});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          data={slides}
          renderItem={renderItem}
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
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
};
