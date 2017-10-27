import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Phone } from './phone.model';
import { PhonesService } from '../main/services/phones.service';
import * as phonesReducer from './state.reducer';

@Injectable()
export class MainEffects {

  @Effect()
  loadPhones$: Observable<Action> = this.actions$
    .ofType(phonesReducer.PhoneActionTypes.LOAD_PHONES)
    .map(() =>
      this.phonesService.getPhones()
      .subscribe((phones: Phone[]) => new phonesReducer.PhoneLoadPhonesSuccess(phones))
    );

  @Effect()
  getPhone$: Observable<Action> = this.actions$
    .ofType(phonesReducer.PhoneActionTypes.GET_PHONE)
    .map((phone: Phone) => new phonesReducer.PhoneGetPhone(phone));

  constructor(
    private actions$: Actions,
    private phonesService: PhonesService
  ) { }

}
