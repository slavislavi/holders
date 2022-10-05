import {FormDataValues} from '@scenes/Edit/types';

export const addressAndDateToServiceData = ({
  address,
  ...rest
}: FormDataValues) => {
  return {
    address: {latitude: address.latitude, longitude: address.longitude},
    date: new Date().toISOString(),
    ...rest,
  };
};
