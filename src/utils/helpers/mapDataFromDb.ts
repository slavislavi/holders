import {serviceItemsTypes} from '@constants/ServiceItemsTypes';
import {GetServiceDataResponse} from '@store/types';
import {mapTypeToLabel} from './mapTypeToLabel';

export type ServiceCategory = {
  categoryTitle: string;
  data: GetServiceDataResponse[];
};

export const mapDataFromDb = (data: GetServiceDataResponse[]) => {
  return data.reduce((arr, item) => {
    const index = arr.findIndex(
      category => category.categoryTitle === item.type,
    );
    if (index >= 0) {
      arr[index].data.push(item);
    } else {
      arr.push({
        categoryTitle: mapTypeToLabel(item.type, serviceItemsTypes),
        data: [item],
      });
    }
    return arr;
  }, [] as ServiceCategory[]);
};
