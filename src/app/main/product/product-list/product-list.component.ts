import { Component, OnInit } from "@angular/core";
import * as fromProduct from "../state/product.reducer";
import * as productAction from "../state/product.actions";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../product.model";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  errors$: Observable<String>;
  constructor(
    private store: Store<fromProduct.AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductList();
  }
  public getProductList() {
    this.store.dispatch(new productAction.LoadProducts());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errors$ = this.store.pipe(select(fromProduct.getError));
  }
}
