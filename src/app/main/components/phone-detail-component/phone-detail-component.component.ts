import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Phone } from '../../../models/phone.model';


@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.scss']
})
export class PhoneDetailComponentComponent {

  @Input() phone: Phone;

  @Output() close = new EventEmitter<string>();

  @HostListener('click', ['$event']) onclick(e) {
    if (e.srcElement.className.startsWith('phone-detail__container')) {
      this.closeDetail();
    }
  }


  constructor() { }

  public closeDetail(): void {
    this.close.emit(this.phone.id);
    this.phone = null;
  }
}
