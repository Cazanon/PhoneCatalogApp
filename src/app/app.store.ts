import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { PhoneReducer, PhoneState } from './models/state.reducer';

export interface AppState {
  phone: PhoneState;
}

const reducers = {
  phone: PhoneReducer
};

export function AppReducer(state: any, action: any) {
  return combineReducers(reducers);
}
