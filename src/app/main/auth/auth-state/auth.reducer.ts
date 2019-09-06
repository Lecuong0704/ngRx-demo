import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Users } from '../auth.model';
import * as fromRoot from '../../../state/appState';
import * as authActions from '../auth-state/auth.actions'
import { Router } from '@angular/router';
import { State } from '@ngrx/store';

export interface UsersState extends EntityState<Users> {
    selectedUsersId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    Users : UsersState;
}
export const usersAdapter: EntityAdapter<Users> = createEntityAdapter<Users>();


export const defaultUser: UsersState = {
    ids: [],
    entities: {},
    selectedUsersId: null,
    loading: false,
    loaded: false,
    error: ''
}
export const initialState = usersAdapter.getInitialState(defaultUser);

export function UsersReducer(state = initialState, action: authActions.Action , router: Router): UsersState {
    switch(action.type){
        case authActions.AuthActionType.GET_ALL_USERS_SUCCESS: {
            return usersAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true,
            });
        }
        case authActions.AuthActionType.GET_ALL_USERS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false
            }
        }
    }
}
