import {ImagePickerResponse} from 'react-native-image-picker';

export interface GetServiceDataResponse {
  date: string;
  name: string;
  type: string;
  address: string;
  description: string;
  photo: ImagePickerResponse | null;
}

export interface AddServiceParams {
  date: string;
  name: string;
  type: string;
  address: string;
  description: string;
  photo: ImagePickerResponse | null;
}
