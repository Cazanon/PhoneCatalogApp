import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Phone } from './phone.model';

export interface PhoneState {
  isLoading: boolean;
  phones: Phone[];
  hasResults: boolean;
  selectedPhone: Phone;
}

export const PhoneActionTypes = {
  LOAD_PHONES: '[Phone] Load Phones',
  LOAD_PHONES_SUCCESS: '[Phone] Load Phones Success',
  GET_PHONE: '[Phone] Get Phone',
  RESET_PHONE: '[Phone] Reset Phone'
};

export class PhoneLoadPhones implements Action {
  type = PhoneActionTypes.LOAD_PHONES;
  constructor(public payload: Phone[] = null) { }
}

export class PhoneLoadPhonesSuccess implements Action {
  type = PhoneActionTypes.LOAD_PHONES_SUCCESS;
  constructor(public payload: Phone[]) { }
}

export class PhoneGetPhone implements Action {
  type = PhoneActionTypes.GET_PHONE;
  constructor(public payload: Phone) { }
}

export class PhoneResetPhone implements Action {
  type = PhoneActionTypes.RESET_PHONE;
  constructor(public payload: Phone = null) { }
}

export type PhoneActions =
  PhoneLoadPhones |
  PhoneLoadPhonesSuccess |
  PhoneGetPhone |
  PhoneResetPhone;


const initialState: PhoneState = {
  isLoading: false,
  phones: [],
  hasResults: false,
  selectedPhone: null
};

export function PhoneReducer(state = initialState, action: PhoneActions): PhoneState {
  switch (action.type) {
    case PhoneActionTypes.LOAD_PHONES:
      return Object.assign(state, {
        isLoading: true,
        phones: null,
        hasResults: false,
        selectedPhone: null
      });
    case PhoneActionTypes.LOAD_PHONES_SUCCESS:
      return Object.assign(state, {
        isLoading: false,
        phones: JSON.parse(JSON.stringify(action.payload)),
        hasResults: true,
        selectedPhone: null
      });
    case PhoneActionTypes.GET_PHONE:
      return Object.assign(state, {
        isLoading: true,
        phones: null,
        hasResults: true,
        selectedPhone: action.payload
      });
    case PhoneActionTypes.RESET_PHONE:
      return Object.assign(state, {
        isLoading: false,
        phones: null,
        hasResults: false,
        selectedPhone: null
      });
    default:
      return state;
  }
}

export const getState = (state: any): PhoneState => {
  return state.phones;
};

export const getPhones = (state: any) => {
  return state && state.phones ? state.phones.phones : [];
};

export const isLoading = (state: any) => {
  return state && state.phones ? state.phones.isLoading : [];
};
