import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, State  } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productReducer } from './main/product/state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { storeLogger } from 'ngrx-store-logger';

// export function logger(reducer: ActionReducer<State>): any {
//   // default, no options
//   return storeLogger()(reducer);
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot( {}),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
