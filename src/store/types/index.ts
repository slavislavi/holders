import {LatLng} from 'react-native-maps';

export interface GetServiceDataResponse {
  id: string;
  date: string;
  name: string;
  type: string;
  address: LatLng;
  description: string;
  photo?: string;
}

export interface AddServiceParams {
  date: string;
  name: string;
  type: string;
  address: LatLng;
  description: string;
  photo?: string;
}
