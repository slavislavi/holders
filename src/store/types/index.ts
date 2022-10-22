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
  photo: string | null;
}

export type ServiceTypeUnion =
  | 'autoService'
  | 'hotel'
  | 'food'
  | 'sports'
  | 'finances'
  | 'beauty'
  | 'mall'
  | 'store'
  | 'education'
  | 'pharmacy'
  | 'others';
