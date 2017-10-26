import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

/* Components */
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
