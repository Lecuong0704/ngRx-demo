import { Action } from '@ngrx/store';
import { User } from '../auth.model';
import { UsersEffect } from './auth.effects';


export enum AuthActionType {
    GET_ALL_USERS = 'GET_ALL_USERS',
    GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL',

    REGISTER_USER = 'REGISTER_USER',
    REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAIL = 'REGISTER_USER_FAIL',

    CHECK_REGISTER = 'CHECK_REGISTER',
    CHECK_REGISTER_SUCCESS = 'CHECK_REGISTER_SUCCESS',
    CHECK_REGISTER_FAIL = 'CHECK_REGISTER_FAIL',

   
    CHECK_LOGIN = 'CHECK_LOGIN',
    LOGOUT = 'LOGOUT'
}


export class checkLogin implements Action {
    readonly type = AuthActionType.CHECK_LOGIN
    constructor (public payload: User ){
        // console.log('action', payload);
    }
}
export class logout implements Action {
    readonly type = AuthActionType.LOGOUT
    constructor ( ){
    }
}

export class checkRegister implements Action {
    readonly type = AuthActionType.CHECK_REGISTER
    constructor(public users: User[], public user: User){
    }
}
export class checkRegisterSuccess implements Action {
    readonly type = AuthActionType.CHECK_REGISTER_SUCCESS
    constructor( public payload: User){
    }
}
export class checkRegisterFail implements Action {
    readonly type = AuthActionType.CHECK_REGISTER_FAIL
    constructor( public payload: string){
    }
}


export class getAllUsers implements Action {
    readonly type = AuthActionType.GET_ALL_USERS
    constructor(){
    }
}
export class getAllUsersSuccess implements Action {
    readonly type = AuthActionType.GET_ALL_USERS_SUCCESS;
    constructor(public payload: User[]){
        
    }
}
export class getAllUsersFail implements Action {
    readonly type = AuthActionType.GET_ALL_USERS_FAIL;
    constructor(public payload: string){}
}

export class registerUser implements Action {
    readonly type = AuthActionType.REGISTER_USER
    constructor(public payload: User){
    }
}
export class registerUserSuccess implements Action {
    readonly type = AuthActionType.REGISTER_USER_SUCCESS;
    constructor(public payload: User){
        
    }
}
export class registerUserFail implements Action {
    readonly type = AuthActionType.REGISTER_USER_FAIL;
    constructor(public payload: string){}
}



export type Action = 
  getAllUsers
| getAllUsersSuccess
| getAllUsersFail
| registerUser
| registerUserSuccess
| registerUserFail
| checkLogin
| logout
| checkRegister
| checkRegisterSuccess
| checkRegisterFail