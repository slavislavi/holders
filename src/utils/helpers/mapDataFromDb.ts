import {GetServiceDataResponse} from '@store/types';

type ServiceCategory = {
  title: string;
  data: GetServiceDataResponse[];
};

export const mapDataFromDb = (data: GetServiceDataResponse[]) => {
  return data.reduce((arr, item) => {
    const index = arr.findIndex(category => category.title === item.type);
    if (index >= 0) {
      arr[index].data.push(item);
    } else {
      arr.push({title: item.type, data: [item]});
    }
    return arr;
  }, [] as ServiceCategory[]);
};
