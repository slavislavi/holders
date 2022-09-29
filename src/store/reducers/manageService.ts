import {createReducer} from 'typesafe-actions';
import {
  addNewServiceAction,
  getServicesDataAction,
  ManageServiceActionUnion,
} from '@store/actions/manageService';
import {GetServiceDataResponse} from '@store/types';

export interface State {
  isLoading: boolean;
  data: GetServiceDataResponse[];
  error: string;
}

const initialState: State = {
  isLoading: false,
  data: [],
  error: '',
};

export const reducer = createReducer<State, ManageServiceActionUnion>(
  initialState,
)
  .handleAction(getServicesDataAction.request, state => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(getServicesDataAction.success, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.payload,
  }))
  .handleAction(getServicesDataAction.failure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload.error,
  }))

  .handleAction(addNewServiceAction.request, state => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(addNewServiceAction.success, state => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(addNewServiceAction.failure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload.error,
  }));
