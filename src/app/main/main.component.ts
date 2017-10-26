import { PhonesService } from './services/phones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private phonesService: PhonesService) { }

  ngOnInit() {
    this.phonesService.getPhones().subscribe(
      data => {
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
