import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProductsService } from "../products.service";
import { Router } from "@angular/router";
import { LoadProducts } from "./product.actions";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import * as productActions from "./product.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Product } from "../product.model";

export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductsService,
    private router: Router
  ) { }

  @Effect()
  LoadProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.LoadProducts>(
      productActions.ProductActionTypes.LOAD_PRODUCTS
    ),
    mergeMap((action: productActions.LoadProducts) =>
      this.productService.getProducts().pipe(
        map(
          (procducts: Product[]) =>
            new productActions.LoadProductsSuccess(procducts)
        ),
        catchError(err => of(new productActions.LoadProductsFail(err)))
      )
    )
  );



  @Effect()
  DeleteProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.DeleteProduct>(
      productActions.ProductActionTypes.DELETE_PRODUCT
    ),
    map((action: productActions.DeleteProduct) => action.payload),
    mergeMap((id: number) => this.productService.deleteProduct(id).pipe(
      map(() => new productActions.DeleteProductSuccess(id)),
      catchError(err => of(new productActions.DeleteProductFail(err)))
    ))
  )


  @Effect()
  CreateProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.CreateProduct>(
      productActions.ProductActionTypes.CREATE_PRODUCT
    ),
    map((action: productActions.CreateProduct) => action.payload),
    mergeMap((product: Product) => this.productService.createProduct(product).pipe(
      map(() => new productActions.CreateProductSuccess(product)),
      catchError(err => of(new productActions.CreateProductFail(err)))
    ))
  )


  @Effect()
  LoadProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.LoadProduct>(
      productActions.ProductActionTypes.LOAD_PRODUCT
    ),
    mergeMap((action: productActions.LoadProduct) => this.productService.getProduct(action.payload).pipe(
      map((procduct: Product) => new productActions.LoadProductSuccess(procduct)),
      catchError(err => of(new productActions.LoadProductFail(err)))
    ))
  )

  @Effect()
  UpdateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.UpdateProduct>(
      productActions.ProductActionTypes.UPDATE_PRODUCT
    ),
    map((action: productActions.UpdateProduct) => action.payload),
    mergeMap((procduct: Product) => this.productService.updateProduct(procduct).pipe(
      map((updatedProduct: Product) => {
        return new productActions.UpdateProductSuccess({
          id: updatedProduct.id,
          changes: updatedProduct
        });
      }),
      catchError(err => of(new productActions.UpdateProductFail(err)))
    ))
  )
}
