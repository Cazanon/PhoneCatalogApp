import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

/* Components */
import { MainComponent } from './main.component';

/* Services */
import { PhonesService } from './services/phones.service';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponentComponent } from './components/phone-detail-component/phone-detail-component.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    BrowserModule
  ],
  declarations: [
    MainComponent,
    PhoneListContainerComponent,
    PhoneDetailComponentComponent
  ],
  exports: [
    MainRoutingModule
  ],
  providers: [
    PhonesService
  ]
})
export class MainModule {
}
