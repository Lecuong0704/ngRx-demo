import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as loginActions from '../auth-state/auth.actions'
import * as loginReducer from '../auth-state/auth.reducer'
import { Observable } from 'rxjs';
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
  public isCheckLogin: boolean = false;


  constructor(private authService: AuthService,private _store:Store<loginReducer.UsersState>,private router:Router) { }

  accUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  ngOnInit() {}

  onSubmit() {
    const accUser = this.accUser
    const store = this._store
    this.authService.getUsers().subscribe(res => {
      res.filter( (el) => {
        if(el.email == accUser.value.email && el.password == accUser.value.password){
          this.isCheckLogin = true;
          store.dispatch(new loginActions.checkLogin({
            id: el.id,
            name: el.name,
            email: el.email,
            password: el.password,
          }));
        }
      })
      
      if (this.isCheckLogin) {
        console.log('đăng nhập thành công');
        this.router.navigate(['/']) 
      } else {
        console.log('đăng nhập thất bại');
      }
    });
  }

}
