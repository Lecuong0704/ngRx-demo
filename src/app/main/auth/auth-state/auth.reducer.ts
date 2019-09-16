import { User } from '../auth.model';
import { Router } from '@angular/router';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../../state/appState';
import * as authActions from '../auth-state/auth.actions';
import * as authReducer from '../auth-state/auth.reducer'


export interface UsersState extends EntityState<User> {
    isLogin : boolean;
    error : string 
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: UsersState = {
    ids: [],
    entities: {},
    isLogin: false,
    error:''
}
export const initialState = userAdapter.getInitialState(defaultUser);
export function usersReducer(state = initialState, action: authActions.Action ): UsersState {
    switch (action.type) {
        case authActions.AuthActionType.CHECK_LOGIN: {
            const user: User = action.payload;
            return {
                ids: state.ids,
                entities: {...state.entities, user},
                isLogin : true,
                error:''
            }
        }
        case authActions.AuthActionType.LOGOUT: {
            return {
                ...state,
                ids: state.ids,
                entities: {},
                isLogin : false,
                error:''
            }
        }
        case authActions.AuthActionType.CHECK_REGISTER_FAIL:{
            return {
                ...state,
                error: action.payload
            }
        }
        case authActions.AuthActionType.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                error: ''
            }
        }
        case authActions.AuthActionType.REGISTER_USER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}



export const getUsersFeatureState = createFeatureSelector<UsersState>('users');
// export const selectCheckLogin = createSelector(getUsersFeatureState, (state: UsersState) => state.isLogin);
// export const getError = createSelector(getUsersFeatureState, (state: UsersState) => state.error);
// export const getUsersLoading = createSelector(getUsersFeatureState, (state: UsersState) => state.loading);
// export const getUsersisLogin = createSelector(getUsersFeatureState, (state: UsersState) => state.loaded);
// export const getCurrentUserId = createSelector(getUsersFeatureState, (state: UsersState) => state.selectedUsersId);
// export const getCurrentUser = createSelector(getUsersFeatureState, (state: UsersState) => state.entities[state.selectedUsersId]);

