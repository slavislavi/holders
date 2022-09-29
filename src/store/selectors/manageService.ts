import {createSelector} from 'reselect';
import {AppState} from '@store/reducers';

export const manageServiceStateSelector = (state: AppState) =>
  state.manageService;

export const isLoadingSelector = createSelector(
  manageServiceStateSelector,
  state => state.isLoading,
);

export const dataFromDbSelector = createSelector(
  manageServiceStateSelector,
  state => state.data,
);
