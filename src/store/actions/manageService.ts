import {ActionType, createAsyncAction} from 'typesafe-actions';
import {AddServiceParams, GetServiceDataResponse} from '@store/types';

export enum ManageServiceTypes {
  GetServicesData = '[ManageService] GetServicesData',
  GetServicesDataSuccess = '[ManageService] GetServicesDataSuccess',
  GetServicesDataFailed = '[ManageService] GetServicesDataFailed',

  AddNewService = '[ManageService] AddNewService',
  AddNewServiceSuccess = '[ManageService] AddNewServiceSuccess',
  AddNewServiceFailed = '[ManageService] AddNewServiceFailed',
}

export const getServicesDataAction = createAsyncAction(
  ManageServiceTypes.GetServicesData,
  ManageServiceTypes.GetServicesDataSuccess,
  ManageServiceTypes.GetServicesDataFailed,
)<void, GetServiceDataResponse[], {error: string}>();

export const addNewServiceAction = createAsyncAction(
  ManageServiceTypes.AddNewService,
  ManageServiceTypes.AddNewServiceSuccess,
  ManageServiceTypes.AddNewServiceFailed,
)<AddServiceParams, void, {error: string}>();

export type ManageServiceActionUnion =
  | ActionType<typeof getServicesDataAction>
  | ActionType<typeof addNewServiceAction>;
