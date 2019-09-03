import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public store;
  // public formGroup = 'product';
  // user = {
  //   email: '',
  //   password: ''
  // };

  constructor() { }

  accUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  ngOnInit() {
  }

  onSubmit(form) {
    // let data = {
    //   email: this.user.email,
    //   password: this.user.password
    // };
    console.log('form', form.value)
    // this.store.dispatch({ type: LOGIN_REQUESTED, data: data });
  }

}
