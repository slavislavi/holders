import {ActionType} from 'typesafe-actions';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  addNewServiceAction,
  getServicesDataAction,
} from '@store/actions/manageService';
import {AddServiceParams, GetServiceDataResponse} from '@store/types';
import {ManageServiceService} from '@services/manageServiceService';

export class ManageServicesSagaWorker {
  static *getServicesData() {
    try {
      const response: GetServiceDataResponse[] = yield call(
        ManageServiceService.getServicesFromDb,
      );
      yield put(getServicesDataAction.success(response));
    } catch (error: any) {
      yield put(getServicesDataAction.failure(error));
    }
  }

  static *addNewService({
    payload,
  }: ActionType<typeof addNewServiceAction.request>) {
    try {
      yield put(addNewServiceAction.success(payload));
    } catch (error: any) {
      yield put(addNewServiceAction.failure(error));
    }
  }
}

export function* manageServicesSaga() {
  yield takeLatest(
    getServicesDataAction.request,
    ManageServicesSagaWorker.getServicesData,
  );
  yield takeLatest(
    addNewServiceAction.request,
    ManageServicesSagaWorker.addNewService,
  );
}
