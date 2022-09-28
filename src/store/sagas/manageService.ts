import {takeLatest, call, put} from '@redux-saga/core/effects';
import {ActionType} from 'typesafe-actions';
import {
  addNewServiceAction,
  getServicesDataAction,
} from '@store/actions/manageService';
import {GetServiceDataResponse} from '@store/types';

export class ManageServicesSagaWorker {
  static *getServicesData() {
    try {
      const response: GetServiceDataResponse[] = yield call(() => {
        return Promise.resolve(console.log('g_e_t resolved'));
      });
      yield put(getServicesDataAction.success(response));
    } catch (error) {
      yield put(getServicesDataAction.failure(error as {error: string}));
    }
  }

  static *addNewService({
    payload,
  }: ActionType<typeof addNewServiceAction.request>) {
    try {
      yield call(() => {
        console.log(payload);
        return Promise.resolve(console.log('a_d_d resolved'));
      });
      yield put(addNewServiceAction.success());
    } catch (error) {
      yield put(addNewServiceAction.failure(error as {error: string}));
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
