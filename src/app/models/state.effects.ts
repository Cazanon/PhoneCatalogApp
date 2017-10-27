import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Phone } from './phone.model';
import { PhonesService } from '../main/services/phones.service';
import * as phonesReducer from './state.reducer';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class MainEffects {

  @Effect()
  loadPhones$: Observable<Action> = this.actions$
    .ofType(phonesReducer.PhoneActionTypes.LOAD_PHONES)
    .switchMap(() =>
      this.phonesService.getPhones()
      .map((phones: Phone[]) => {
        return new phonesReducer.PhoneLoadPhonesSuccess(phones);
      })
    );

  constructor(
    private actions$: Actions,
    private phonesService: PhonesService
  ) { }

}
