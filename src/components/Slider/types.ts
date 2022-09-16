import {Animated} from 'react-native';

export type SliderItemType = {
  id: string;
  title: string;
  description: string;
  image: {uri: string};
};

export type SliderItemProps = {
  item: SliderItemType;
};

export type NextButtonProps = {
  percentage: number;
  scrollTo: () => void;
};

export type PaginatorProps = {
  data: SliderItemType[];
  scrollX: Animated.Value;
};
