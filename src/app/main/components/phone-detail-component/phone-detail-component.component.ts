import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../../../models/phone.model';


@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.scss']
})
export class PhoneDetailComponentComponent implements OnInit {

  @Input() phone: Phone;

  constructor() { }

  ngOnInit() {
  }

  public closeDetail(): void {
    this.phone = null;
  }
}
