import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type CustomInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T>;
