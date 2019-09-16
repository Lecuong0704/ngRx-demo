import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as userState  from './main/auth/auth-state/auth.reducer';
import *  as authReducer from './main/auth/auth-state/auth.reducer';
import { Observable } from 'rxjs';
import * as App  from './state/appState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRx-demo';
  checkLogin$: Observable<boolean>
  constructor( private store: Store<App.AppState>){

  }
  ngOnInit(): void {
    // let checkLogin = this.store.pipe(select(authReducer.selectCheckLogin));
    // checkLogin.subscribe((data)=> this.checkLogin$ = data)
  }
  ngAfterViewUnit(){
    this.checkLogin$ = this.store.pipe(select(App.selectCheckLogin));

  }
  ngDoCheck(){
    
  }
}
