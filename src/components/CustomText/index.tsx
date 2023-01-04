import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';

import {Props} from '@components/CustomText/types';
import {styles} from '@components/CustomText/styles';

export const CustomText: FC<Props> = props => (
  <Text style={{...styles.default, ...(props.style as TextProps)}}>
    {props.children}
  </Text>
);
