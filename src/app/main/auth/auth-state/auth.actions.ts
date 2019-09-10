import { Action } from '@ngrx/store';
import { User } from '../auth.model';


export enum AuthActionType {
    GET_ALL_USERS = 'GET_ALL_USERS',
    GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL',

   
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



export type Action = 
  getAllUsers
| getAllUsersSuccess
| getAllUsersFail
| checkLogin
| logout