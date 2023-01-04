import {TextValues} from '@constants/TextValues';
import {ActionType} from 'typesafe-actions';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import {
  addNewServiceAction,
  getServicesDataAction,
} from '@store/actions/manageService';
import {GetServiceDataResponse} from '@store/types';
import {ManageServiceService} from '@services/manageServiceService';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

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
      yield put(addNewServiceAction.success({...payload, id: response.id}));
      yield call(Alert.alert, TextValues.SuccessfullyUpload);
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
