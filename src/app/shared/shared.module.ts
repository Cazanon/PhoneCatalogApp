import { NgModule } from '@angular/core';

/* Components */
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [],
  exports: [
    SpinnerComponent,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule { }
