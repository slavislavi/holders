import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {FieldValues, useController} from 'react-hook-form';
import {DropdownPickerProps} from './types';
import {styles} from './styles';

export const DropdownPicker = <T extends FieldValues>({
  initialItems,
  placeholder,
  ...useControllerProps
}: DropdownPickerProps<T>) => {
  const {
    field: {onChange, value},
  } = useController(useControllerProps);
  const [showPicker, setShowPicker] = useState(false);
  const [items, setItems] = useState(initialItems);

  return (
    <DropDownPicker
      open={showPicker}
      value={value}
      items={items}
      setOpen={setShowPicker}
      setValue={onChange}
      setItems={setItems}
      onChangeValue={onChange}
      maxHeight={245}
      style={styles.container}
      textStyle={styles.text}
      dropDownContainerStyle={styles.dropdownContainer}
      placeholder={placeholder}
    />
  );
};
