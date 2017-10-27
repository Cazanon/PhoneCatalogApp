import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppReducer } from './app.store';
import { MainEffects } from './models/state.effects';

/* Modules */
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([MainEffects]),
    AppRoutingModule,
    SharedModule,
    MainModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
