import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { MainComponent } from './main.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HeaderComponent, outlet: 'header' },
      { path: '', component: MainComponent, outlet: 'main' },
      { path: '', component: FooterComponent, outlet: 'footer' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
