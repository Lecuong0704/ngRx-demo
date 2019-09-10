import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as userState  from './main/auth/auth-state/auth.reducer';
import { selectCheckLogin } from './main/auth/auth-state/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRx-demo';
  constructor( private store: Store<userState.UsersState>){}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    console.log('Store_______', this.store.pipe(select(selectCheckLogin)));
    
  }
}
