import {FormDataValues} from '@scenes/Edit/types';

export const addDateToServiceData = (data: FormDataValues) => {
  return {...data, date: new Date().toISOString()};
};
