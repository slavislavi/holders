import React, {FC, useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity, Animated, Platform} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

import {THEME} from '@styles/theme';
import {styles} from './styles';

export const NextButton: FC = ({percentage, scrollTo}) => {
  const SIZE = 128;
  const STROKE_WIDTH = 2;
  const CENTER = SIZE / 2;
  const RADIUS = SIZE / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
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
    progressAnimation.addListener(
      value => {
        const strokeDashOffset =
          CIRCUMFERENCE - (CIRCUMFERENCE * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashOffset,
          });
        }
      },
      [percentage],
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>
        <G rotation='-90' origin={CENTER}>
          <Circle
            stroke={THEME.PRIMARY_HOVER}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
          />
          <Circle
            ref={progressRef}
            stroke={THEME.DANGER}
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
