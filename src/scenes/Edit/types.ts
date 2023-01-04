import {ImagePickerResponse} from 'react-native-image-picker';

export interface FormDataValues {
  name: string;
  type: string;
  address: {
    latitude: string;
    longitude: string;
  };
  description: string;
  photo?: ImagePickerResponse | any;
}
