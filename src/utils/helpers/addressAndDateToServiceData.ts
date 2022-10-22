import {FormDataValues} from '@scenes/Edit/types';

export const addressAndDateToServiceData = ({
  address,
  photo,
  ...rest
}: FormDataValues) => {
  console.log(
    '...helper fired with photo: ',
    JSON.stringify(photo).split('/').pop(),
  );
  return {
    address: {latitude: +address.latitude, longitude: +address.longitude},
    photo: JSON.stringify(photo).split('/').pop() || null,
    date: new Date().toISOString(),
    ...rest,
  };
};
