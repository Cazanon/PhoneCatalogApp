import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../../../models/phone.model';


@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent implements OnInit {

  @Input() phones: Phone[];

  public selectedPhone: Phone;

  constructor() { }

  ngOnInit() {
  }

  public selectPhone(id: string): void {
    this.selectedPhone = this.phones.find(e => e.id === id);
  }

  trackById(index, item) {
    return item.id;
  }
}
