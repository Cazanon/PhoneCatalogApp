import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { PhoneReducer, PhoneState } from './models/state.reducer';

export interface AppState {
  phones: PhoneState;
}

export const reducers = {
  phones: PhoneReducer
};

export function AppReducer(state: any, action: any) {
  return combineReducers(reducers);
}
