import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Phone } from './phone.model';

export interface PhoneState {
  isGetting: boolean;
  phones: Phone[];
  hasResults: boolean;
  selectedPhone: Phone;
}

export const PhoneActionTypes = {
  LOAD_PHONES: '[Phone] Load Phones',
  LOAD_PHONES_SUCCESS: '[Phone] Load Phones Success',
  GET_PHONE: '[Phone] Get Phone',
  GET_PHONE_SUCCESS: '[Phone] Get Phone Success',
  RESET_PHONE: '[Phone] Reset Phone'
};

export class PhoneLoadPhones implements Action {
  type = PhoneActionTypes.LOAD_PHONES;
  constructor() { }
}

export class PhoneLoadPhonesSuccess implements Action {
  type = PhoneActionTypes.LOAD_PHONES_SUCCESS;
  constructor(public payload: Phone[]) { }
}

export class PhoneGetPhone implements Action {
  type = PhoneActionTypes.GET_PHONE;
  constructor() { }
}

export class PhoneGetPhoneSuccess implements Action {
  type = PhoneActionTypes.GET_PHONE_SUCCESS;
  constructor(public payload: Phone) { }
}

export class PhoneResetPhone implements Action {
  type = PhoneActionTypes.RESET_PHONE;
  constructor() { }
}

export type PhoneActions =
  PhoneLoadPhones |
  PhoneLoadPhonesSuccess |
  PhoneGetPhone |
  PhoneGetPhoneSuccess |
  PhoneResetPhone;


const initialState: PhoneState = {
  isGetting: false,
  phones: null,
  hasResults: false,
  selectedPhone: null
};

export function PhoneReducer(state = initialState, action: PhoneActions): PhoneState {
  switch (action.type) {
    case PhoneActionTypes.LOAD_PHONES:
      return Object.assign(state, {
        isGetting: true,
        phones: null,
        hasResults: false,
        selectedPhone: null
      });
    case PhoneActionTypes.LOAD_PHONES_SUCCESS:
      return Object.assign(state, {
        isGetting: false,
        // phones: action.payload,
        phones: action,
        hasResults: true,
        selectedPhone: null
      });
    case PhoneActionTypes.GET_PHONE:
      return Object.assign(state, {
        isGetting: true,
        phones: null,
        hasResults: true,
        selectedPhone: null
      });
    case PhoneActionTypes.GET_PHONE_SUCCESS:
      return Object.assign(state, {
        isGetting: false,
        phones: null,
        hasResults: false,
        // selectedPhone: action.payload
        selectedPhone: action
      });
    case PhoneActionTypes.RESET_PHONE:
      return Object.assign(state, {
        isGetting: false,
        phones: null,
        hasResults: false,
        selectedPhone: null
      });
    default:
      return state;
  }
}
