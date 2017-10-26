import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

/* Components */
import { MainComponent } from './main.component';

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
  ]
})
export class MainModule {
}
