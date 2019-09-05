import { Action } from '@ngrx/store';
import { Users } from '../auth.model';


export enum AuthActionType {
    GET_ALL_USERS = '[Auth] get all users',
    GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL',

   
    LOGIN_REQUESTED = 'LOGIN_REQUESTED',
}

export class getAllUsers implements Action {
    readonly type = AuthActionType.GET_ALL_USERS
}
export class getAllUsersSuccess implements Action {
    readonly type = AuthActionType.GET_ALL_USERS_SUCCESS;
    constructor(public payload: Users[]) {}
}
export class getAllUsersFail implements Action {
    readonly type = AuthActionType.GET_ALL_USERS_FAIL;
    constructor (public payload: string){}
}


export class loginRequested implements Action {
    readonly type = AuthActionType.LOGIN_REQUESTED
    constructor (public payload: Users ){
        console.log('action', payload);
    }
}
