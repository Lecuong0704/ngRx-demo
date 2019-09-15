import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { async } from '@angular/core/testing';
import { usersReducer } from '../auth-state/auth.reducer';
import { Store } from '@ngrx/store';
import * as authReducer from '../auth-state/auth.reducer';
import * as authActions from '../auth-state/auth.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private store: Store<authReducer.UsersState>) { }
  public user = {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  }

  ngOnInit() {
  }

  onSubmit() {
    let user = this.user;
    let store = this.store;
    if (user.password == user.confirmPassword) {
      store.dispatch( new authActions.registerUser(user))
    } else {
      alert('Xac nhan mat khau khong dung')
    }
  }

}
