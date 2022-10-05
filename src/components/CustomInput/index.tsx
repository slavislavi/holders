import React from 'react';
import {TextInput} from 'react-native';
import {FieldValues, useController} from 'react-hook-form';
import {CustomInputProps} from './types';

export const CustomTextInput = <T extends FieldValues>(
  props: CustomInputProps<T>,
) => {
  const {name, control, rules, ...rest} = props;
  const {
    field: {onChange, value, ...restFieldProps},
  } = useController<T>({name, control, rules});

  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      {...restFieldProps}
      {...rest}
    />
  );
};
