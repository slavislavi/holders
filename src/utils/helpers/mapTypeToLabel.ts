import {DropdownPickerItem} from '@components/DropdownPicker/types';

export const mapTypeToLabel = (
  type: string,
  arrayOfTypes: DropdownPickerItem[],
): string => {
  return arrayOfTypes.filter(item => item.value === type)[0].label;
};
