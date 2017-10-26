import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

/* Components */
import { MainComponent } from './main.component';

/* Services */
import { PhonesService } from './services/phones.service';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
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
