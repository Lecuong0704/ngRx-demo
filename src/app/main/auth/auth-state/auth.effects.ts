import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import * as authAction from '../auth-state/auth.actions'
import { map, mergeMap, catchError, find, filter, every, toArray, switchMap } from 'rxjs/operators';
import { User } from '../auth.model'
import { Injectable } from '@angular/core';


export class UsersEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    @Effect()
    CheckUserRegister$ = this.actions$.pipe(
        ofType<authAction.registerUser>(authAction.AuthActionType.REGISTER_USER),
        switchMap((action: authAction.registerUser) => this.authService.getUsers().pipe(
            switchMap((users: User[]) => {
                if (users.every((el) => el.email !== action.payload.email)) {
                    const cf = confirm("Bạn đã đăng ký thành công!Đăng nhập ngay?");
                    if(cf){
                        this.router.navigate(['/auth/login'])
                    } else{
                        this.router.navigate(['/'])
                    }
                    return of(new authAction.checkRegisterSuccess(action.payload))
                } else {
                    return of(new authAction.checkRegisterFail('Tài khoản đã tồn tại'))
                }
            })
        ))
    )

    @Effect()
    Create$ = this.actions$.pipe(
        ofType<authAction.checkRegisterSuccess>(authAction.AuthActionType.CHECK_REGISTER_SUCCESS),
        map((action: authAction.checkRegisterSuccess) => action.payload),
        mergeMap((user: User) => this.authService.createUser(user).pipe(
            map((user: User) => new authAction.registerUserSuccess(user)),
            catchError(err => of(new authAction.registerUserFail(err)))
        ))
    )

    // @Effect()
    // Login$: Observable<Action> = this.actions$.pipe(
    //     ofType<authAction.loginRequested>(
    //         authAction.AuthActionType.LOGIN_REQUESTED
    //      ),
    //      mergeMap(() => this.authService.getUsers().pipe(
    //         map((Users: Users[]) => new authAction.checkLogin(Users)),
    //         catchError(err => of(new authAction.getAllUsersFail(err))
    //     ))

    // )
    // )

}