import { PhonesService } from './services/phones.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Phone } from '../models/phone.model';
import * as phonesReducer from '../models/state.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public phones$: Observable<Phone[]>;
  public phones: Phone[];

  public loading = true;

  constructor(
    private store: Store<phonesReducer.PhoneState>,
    private phonesService: PhonesService) { }

  ngOnInit() {
    this.store.dispatch(new phonesReducer.PhoneLoadPhones());
    this.phones$ = this.store.select(phonesReducer.getPhones);

    this.phonesService.getPhones().subscribe(data => {
      this.phones = data;
      this.loading = false;
    });
  }

}
