import {combineReducers} from '@reduxjs/toolkit';
import 'react-redux';
import * as fromManageService from './manageService';

export interface AppState {
  manageService: fromManageService.State;
}

export const rootReducer = combineReducers<AppState>({
  manageService: fromManageService.reducer,
});
