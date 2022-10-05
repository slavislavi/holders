import {ImagePickerResponse} from 'react-native-image-picker';

export interface FormDataValues {
  name: string;
  type: string;
  address: {
    latitude: number;
    longitude: number;
  };
  description: string;
  photo: ImagePickerResponse | null;
}
