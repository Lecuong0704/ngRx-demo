import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forRoot({ }),
    EffectsModule.forRoot([]),
  ]
})
export class MainModule { }
