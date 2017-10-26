import { PhonesService } from './services/phones.service';
import { Component, OnInit } from '@angular/core';

import { Phone } from '../models/phone.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public phones: Phone[];

  constructor(private phonesService: PhonesService) { }

  ngOnInit() {
    this.phonesService.getPhones().subscribe(
      data => {
        this.phones = data;
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
