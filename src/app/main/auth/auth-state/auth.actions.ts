import { Action } from '@ngrx/store';
import { Users } from '../auth.model';


export enum AuthActionType {
    GET_ALL_USERS = '[Auth] get all users',
    CHECK_LOGIN = 'CHECK LOGIN',
    LOGOUT = 'LOGOUT',
    LOGIN_REQUESTED = 'LOGIN_REQUESTED'
}

export class getAllUsers implements Action {
    readonly type = AuthActionType.GET_ALL_USERS
}
export class loginRequested implements Action {
    readonly type = AuthActionType.LOGIN_REQUESTED
    constructor (public payload: Users ){
        console.log('action', payload);
        
    }
}