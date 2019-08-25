import { Action } from "@ngrx/store";
import { Product } from "../product.model";

export enum ProductActionTypes {
  LOAD_PRODUCTS = "[Product] Load Product",
  LOAD_PRODUCTS_SUCCESS = "[Product] Load Product Success",
  LOAD_PRODUCTS_FAIL = "[Product] Load Product Fail"
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
  constructor (public payload: string){}
}




export type Action =
    LoadProducts
|   LoadProductsFail
|   LoadProductsSuccess
// |   LoadProduct
// |   LoadProductFail
// |   LoadProductSuccess
// |   CreateProduct
// |   CreateProductFail
// |   CreateProductSuccess
// |   UpdateProduct
// |   UpdateProductFail
// |   UpdateProductSuccess
// |   DeleteProduct
// |   DeleteProductFail
// |   DeleteProductSuccess
