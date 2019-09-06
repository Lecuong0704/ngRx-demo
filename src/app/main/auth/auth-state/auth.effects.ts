import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import * as authAction from '../auth-state/auth.actions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Users } from '../auth.model'



export class ProductEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

@Effect()
GetUsers$ : Observable<Action> = this.actions$.pipe(
    ofType<authAction.getAllUsers>(
        authAction.AuthActionType.GET_ALL_USERS
    ),
    mergeMap((action: authAction.getAllUsers)=> this.authService.getUsers().pipe(
        map((Users: Users[])=> new authAction.getAllUsersSuccess(Users)),
        catchError(err => of(new authAction.getAllUsersFail(err))
    ))
)

    // @Effect()
    // Login$: Observable<Action> = this.actions$.pipe(
    //     ofType<authAction.loginRequested>(
    //         authAction.AuthActionType.LOGIN_REQUESTED
    //      )
        
    // )


}