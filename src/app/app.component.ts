import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as userState  from './main/auth/auth-state/auth.reducer';
import *  as authReducer from './main/auth/auth-state/auth.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRx-demo';
  public checkLogin$: Observable<boolean> 
  constructor( private store: Store<userState.UsersState>){}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.checkLogin$ = this.store.pipe(select(authReducer.selectCheckLogin));
  }
}
