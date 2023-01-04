import {RootDrawerProps} from '@router/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerProps {}
  }
}
