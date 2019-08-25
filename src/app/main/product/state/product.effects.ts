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
  ) {}

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
}
