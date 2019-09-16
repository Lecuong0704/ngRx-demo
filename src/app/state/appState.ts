import { ProductState, productReducer, productAdapter, getProductFeatureState } from '../main/product/state/product.reducer';
import { UsersState, usersReducer } from '../main/auth/auth-state/auth.reducer';
import { createFeatureSelector, createSelector, compose, combineReducers } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';

export interface AppState {
    products: ProductState;
    users: UsersState;
}
const appState = {
    products: productReducer,
    users: usersReducer
}

const developmentReducer = compose(storeFreeze, combineReducers)(appState);
// const productionReducer = combineReducers(appState);

export function appReducer(state: any, action: any) {
  if (environment.production) {
    // return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


export const getAppFeatureState = createFeatureSelector<AppState>('App');
// export const selectCheckLogin = createSelector(getAppFeatureState, (state: AppState) => state.users.isLogin);


// export function appReducer(state = initialState): AppState {
//     return {
//         ...state,
//         products: new Observable<ProductState>()
//     };
// }
// export const getError = createSelector(getUsersFeatureState, (state: UsersState) => state.error);