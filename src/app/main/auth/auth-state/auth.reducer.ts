import { User } from '../auth.model';
import { Router } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../../state/appState';
import * as authActions from '../auth-state/auth.actions'



export interface UsersState {
    entities: Array<User>;
    checkLogin: boolean;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: UsersState = {
    entities: [],
    checkLogin: false
}
export const initialState = userAdapter.getInitialState(defaultUser);

export function usersReducer(state = initialState, action: authActions.Action): UsersState {
    switch (action.type) {
        case authActions.AuthActionType.CHECK_LOGIN: {
            const user: User = action.payload;
            return {
                entities: [...state.entities, user],
                checkLogin : true
            }
        }
        case authActions.AuthActionType.LOGOUT: {
            return {
                ...state,
                entities: [],
                checkLogin : false
            }
        }
        default: {
            return state
        }
    }
}



export const getUsersFeatureState = createFeatureSelector<UsersState>('Users');
export const selectCheckLogin =createSelector(getUsersFeatureState,(state: UsersState) => state.checkLogin);
// export const getError = createSelector(getUsersFeatureState, (state: UsersState) => state.error);
// export const getUsersLoading = createSelector(getUsersFeatureState, (state: UsersState) => state.loading);
// export const getUsersLoaded = createSelector(getUsersFeatureState, (state: UsersState) => state.loaded);
// export const getCurrentUserId = createSelector(getUsersFeatureState, (state: UsersState) => state.selectedUsersId);
// export const getCurrentUser = createSelector(getUsersFeatureState, (state: UsersState) => state.entities[state.selectedUsersId]);

