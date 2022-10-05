import {ImagePickerResponse} from 'react-native-image-picker';

export interface GetServiceDataResponse {
  id: string;
  date: string;
  name: string;
  type: string;
  address: {
    latitude: number;
    longitude: number;
  };
  description: string;
  photo: ImagePickerResponse | null;
}

export interface AddServiceParams {
  date: string;
  name: string;
  type: string;
  address: {
    latitude: string;
    longitude: string;
  };
  description: string;
  photo: ImagePickerResponse | null;
}
