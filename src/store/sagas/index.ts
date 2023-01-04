import {fork} from '@redux-saga/core/effects';
import {manageServicesSaga} from './manageService';

export function* rootSaga() {
  yield fork(manageServicesSaga);
}
