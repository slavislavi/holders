import {FormDataValues} from '@scenes/Edit/types';

export const addressAndDateToServiceData = ({
  address,
  photo,
  ...rest
}: FormDataValues) => {
  console.log(
    '<helper/addressAndDateToServiceData> fired with photo: ',
    JSON.stringify(photo).split('/').pop(),
  );
  return {
    address: {latitude: +address.latitude, longitude: +address.longitude},
    photo: photo && JSON.stringify(photo).split('/').pop(),
    date: new Date().toISOString(),
    ...rest,
  };
};
