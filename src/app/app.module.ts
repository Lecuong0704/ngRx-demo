import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, State  } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { usersReducer } from './main/auth/auth-state/auth.reducer';
import { productReducer } from './main/product/state/product.reducer';
import { appReducer } from './state/appState';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({appReducer}),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
