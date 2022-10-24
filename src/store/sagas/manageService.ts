import {ActionType} from 'typesafe-actions';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {
  addNewServiceAction,
  getServicesDataAction,
} from '@store/actions/manageService';
import {GetServiceDataResponse} from '@store/types';
import {ManageServiceService} from '@services/manageServiceService';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

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
      const response: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData> =
        yield call(ManageServiceService.addServiceToDb, payload);
      console.log('<SAGA> addNewService SAGA: ', response); // TO REMOVE
      yield put(addNewServiceAction.success({...payload, id: response.id}));
    } catch (error: any) {
      console.log('<SAGA> addNew SAGA with Error: ', error); // TO REMOVE
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
