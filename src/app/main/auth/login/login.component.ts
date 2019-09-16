import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as authActions from '../auth-state/auth.actions'
import * as authReducer from '../auth-state/auth.reducer'
import { Observable, of } from 'rxjs';
import { User } from '../auth.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public users$: Observable<User[]>
  public isCheckLogin: boolean = false


  constructor(private authService: AuthService,private _store:Store<authReducer.UsersState>,private router:Router) { }
  accUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  ngOnInit() {
  }
 

  onSubmit() {
    const accUser = this.accUser
    const store = this._store
    this.authService.getUsers().subscribe(res => {
      res.filter( (el) => {
        if(el.email == accUser.value.email && el.password == accUser.value.password){
          this.isCheckLogin = true;
          store.dispatch(new authActions.checkLogin({
            id: el.id,
            name: el.name,
            email: el.email,
            password: el.password,
            avatar: el.avatar
          }));
        }
      })
      if (this.isCheckLogin) {
        const cf = confirm('Bạn đã đăng nhập thanh công! Quay lại trang chủ?')
        if(cf){
          this.router.navigate(['/'])
        }
      } else {
        alert('Tài khoản hoặc mật khẩu không đúng');
      }
    });
  }
}
