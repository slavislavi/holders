import {FormDataValues} from '@scenes/Edit/types';

export const addressAndDateToServiceData = ({
  address,
  photo,
  ...rest
}: FormDataValues) => {
  console.log(
    '...helper fired... photo: ',
    JSON.stringify(photo).split('/').pop(),
  );
  return {
    address: {latitude: +address.latitude, longitude: +address.longitude},
    photo: photo?.assets && JSON.stringify(photo).split('/').pop(),
    date: new Date().toISOString(),
    ...rest,
  };
};
