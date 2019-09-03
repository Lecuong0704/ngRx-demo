import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as loginActions from '../auth-state/auth.actions'
import * as loginReducer from '../auth-state/auth.reducer'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<loginReducer.AppState>) { }

  accUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch( new  loginActions.loginRequested( this.accUser.value) );
  }

}
