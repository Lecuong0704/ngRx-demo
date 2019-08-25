import { Product } from '../product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Router } from '@angular/router';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromRoot from '../../../state/appState';
import * as productActions from './product.actions';


export interface ProductState extends EntityState<Product> {
    selectedProductId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.AppState {
    products: ProductState;
}
export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();


export const defaultProduct: ProductState = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loading: false,
    loaded: false,
    error: ''
}
export const initialState = productAdapter.getInitialState(defaultProduct);
export function productReducer(state = initialState, action: productActions.Action, router: Router): ProductState {
    switch(action.type){
        case productActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
            return productAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true,
            });
        }
        case productActions.ProductActionTypes.LOAD_PRODUCTS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false
            }
        }
        case productActions.ProductActionTypes.DELETE_PRODUCT_SUCCESS: {
            return productAdapter.removeOne(action.payload, {
                ...state,
            });
        }
        case productActions.ProductActionTypes.DELETE_PRODUCT_FAIL: {
            return {
                ...state,
                entities: {},
            }
        }
        default: {
            return state;
        }
    }
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const getProducts = createSelector(getProductFeatureState, productAdapter.getSelectors().selectAll);
export const getError = createSelector(getProductFeatureState, (state: ProductState) => state.error);
export const getProductsLoading = createSelector(getProductFeatureState, (state: ProductState) => state.loading);
export const getProductsLoaded = createSelector(getProductFeatureState, (state: ProductState) => state.loaded);
export const getCurrentProductId =  createSelector(getProductFeatureState, (state: ProductState) => state.selectedProductId);
export const getCurrentProduct = createSelector(getProductFeatureState, (state: ProductState) => state.entities[state.selectedProductId]);

