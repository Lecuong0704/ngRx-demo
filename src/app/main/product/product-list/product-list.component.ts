import { Component, OnInit } from "@angular/core";
import * as fromProduct from "../state/product.reducer";
import * as productAction from "../state/product.actions";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../product.model";
import { Store, select } from "@ngrx/store";
import { AppState } from '../../../state/appState';
import * as fromApp from "../../../state/appState"


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
  
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  errors$: Observable<String>;
  constructor(
    private store: Store<AppState>,
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
  
  public deleteProduct(product, index){
    const cf = confirm("Ban co chac chan xoa san pham nay?");
    if(cf){
      this.confirmDeleteProduct(product,index);
    }
  }
  public confirmDeleteProduct(product, index){
    let productSelect = document.querySelector(`#product${index}`);
    productSelect.classList.add('hinge');
    setTimeout(()=>{
      productSelect.classList.add('d-none')
      this.store.dispatch(new productAction.DeleteProduct(product.id));
    },2000)
  }

  public editProduct(id){
    this.router.navigate([`/product-edit/${id}`]);
  }
  public createProduct(){
    this.router.navigate([`/product-create/`]);
  }

}
