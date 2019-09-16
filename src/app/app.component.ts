import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as userState from './main/auth/auth-state/auth.reducer';
import *  as authReducer from './main/auth/auth-state/auth.reducer';
import *  as productsReducer from './main/product/state/product.reducer';
import { Observable } from 'rxjs';
import * as App from './state/appState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ngRx-demo';
  userLogin$
  constructor(private store: Store<userState.UsersState>) {

  }
  ngOnInit(): void {
    this.getCheckLogin()
  }
  getCheckLogin() {
    this.store.pipe(select(authReducer.selectCheckLogin)).subscribe((updateCheckLogin) => {
      if (updateCheckLogin !== undefined) {
        this.userLogin$ = updateCheckLogin
      } else {
        this.userLogin$ = 'undefined'
      }
      
    });
  }
}
