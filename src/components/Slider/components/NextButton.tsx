import React, {FC, useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity, Animated, Platform} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

import {NextButtonProps} from '@components/Slider/types';
import {styles} from '@components/Slider/styles';
import {THEME} from '@styles/theme';

export const NextButton: FC<NextButtonProps> = ({percentage, scrollTo}) => {
  const SIZE = 112;
  const STROKE_WIDTH = 4;
  const CENTER = SIZE / 2;
  const RADIUS = SIZE / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<any>(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: Platform.OS === 'ios' ? true : false,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        CIRCUMFERENCE - (CIRCUMFERENCE * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>
        <G rotation='-90' origin={CENTER}>
          <Circle
            stroke={THEME.INACTIVE}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
          />
          <Circle
            ref={progressRef}
            stroke={THEME.PAGINATOR_DOT}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.skipButton}
        activeOpacity={0.6}>
        <Text style={styles.skipText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};
