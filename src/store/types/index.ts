import {ImagePickerResponse} from 'react-native-image-picker';
import {LatLng} from 'react-native-maps';

export interface GetServiceDataResponse {
  id: string;
  date: string;
  name: string;
  type: string;
  address: LatLng;
  description: string;
  photo: string | null;
}

export interface AddServiceParams {
  date: string;
  name: string;
  type: string;
  address: LatLng;
  description: string;
  photo: ImagePickerResponse | null;
}
