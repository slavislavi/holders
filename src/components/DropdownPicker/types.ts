import {FieldValues, UseControllerProps} from 'react-hook-form';

export type DropdownPickerProps<T extends FieldValues> = {
  initialItems: DropdownPickerItem[];
  placeholder?: string;
} & UseControllerProps<T>;

export type DropdownPickerItem = {
  label: string;
  value: string;
};
