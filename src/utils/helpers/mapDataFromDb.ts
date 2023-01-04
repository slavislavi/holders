import {GetServiceDataResponse} from '@store/types';

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
        categoryTitle: item.type,
        data: [item],
      });
    }
    return arr;
  }, [] as ServiceCategory[]);
};
