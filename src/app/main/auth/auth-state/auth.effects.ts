import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import * as authAction from '../auth-state/auth.actions'
import { map, mergeMap, catchError, find, filter } from 'rxjs/operators';
import { User } from '../auth.model'



export class UsersEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    // @Effect()
    // GetUsers$: Observable<Action> = this.actions$.pipe(
    //     ofType<authAction.getAllUsers>(
    //         authAction.AuthActionType.GET_ALL_USERS
    //     ),
    //     mergeMap((action: authAction.getAllUsers) => this.authService.getUsers().pipe(
    //         map((Users: User[]) => new authAction.getAllUsersSuccess(Users)),
    //         catchError(err => of(new authAction.getAllUsersFail(err))
    //         ))
    //     )
    // )

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