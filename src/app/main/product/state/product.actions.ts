import { Action } from "@ngrx/store";
import { Product } from "../product.model";

export enum ProductActionTypes {
  LOAD_PRODUCTS = "[Product] Load Product",
  LOAD_PRODUCTS_SUCCESS = "[Product] Load Product Success",
  LOAD_PRODUCTS_FAIL = "[Product] Load Product Fail",


  DELETE_PRODUCT = "[Product] Delete Product",
  DELETE_PRODUCT_SUCCESS = "[Product] Delete Product Success",
  DELETE_PRODUCT_FAIL = "[Product] Delete Product Fail"
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


export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload: any){ }
}
export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: number){
    
   }
}
export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_FAIL;
  constructor(public payload: number){ }
}






export type Action =
    LoadProducts
|   LoadProductsFail
|   LoadProductsSuccess
|   DeleteProduct
|   DeleteProductFail
|   DeleteProductSuccess
// |   LoadProduct
// |   LoadProductFail
// |   LoadProductSuccess
// |   CreateProduct
// |   CreateProductFail
// |   CreateProductSuccess
// |   UpdateProduct
// |   UpdateProductFail
// |   UpdateProductSuccess
