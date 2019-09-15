import { User } from '../auth.model';
import { Router } from '@angular/router';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../../state/appState';
import * as authActions from '../auth-state/auth.actions';
import * as authReducer from '../auth-state/auth.reducer'
import { Injectable } from '@angular/core';


Injectable()
export interface UsersState extends EntityState<User> {
    loaded : boolean;
    error : string 
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: UsersState = {
    ids: [],
    entities: {},
    loaded: false,
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
                loaded : true,
                error:''
            }
        }
        case authActions.AuthActionType.LOGOUT: {
            return {
                ...state,
                ids: state.ids,
                entities: {},
                loaded : false,
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



export const getUsersFeatureState = createFeatureSelector<UsersState>('Users');
export const selectCheckLogin = (state: UsersState) => state.loaded;
// export const getError = createSelector(getUsersFeatureState, (state: UsersState) => state.error);
// export const getUsersLoading = createSelector(getUsersFeatureState, (state: UsersState) => state.loading);
// export const getUsersLoaded = createSelector(getUsersFeatureState, (state: UsersState) => state.loaded);
// export const getCurrentUserId = createSelector(getUsersFeatureState, (state: UsersState) => state.selectedUsersId);
// export const getCurrentUser = createSelector(getUsersFeatureState, (state: UsersState) => state.entities[state.selectedUsersId]);

