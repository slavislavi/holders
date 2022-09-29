import {ImagePickerResponse} from 'react-native-image-picker';

export interface FormDataValues {
  name: string;
  type: string;
  address: string;
  description: string;
  photo: ImagePickerResponse | null;
}
