import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, Action } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as fromApp from "../../../state/appState"
import * as productAction from '../state/product.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from '../../../state/appState';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public product$: any = {
    id: '',
    name: '',
    price: '',
    stock: '',
    description: ''
  };
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
   ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get("slug");
      this.getProduct(id);
    });
  }

  public getProduct(id) {
    this.store.dispatch(new productAction.LoadProduct(id));
    const product$ = this.store.select(fromProduct.getCurrentProduct).subscribe(editedProduct => {
      if (editedProduct) {
        this.product$ = editedProduct;
      }
      this.initProductForm();
    });
    const error$ = this.store.select(fromProduct.getError);
  }
  public initProductForm() {
    this.productForm = this.formBuilder.group({
      id: [this.product$.id],
      name: [this.product$.name,[Validators.required]],
      description: [this.product$.description],
      stock: [this.product$.stock],
      price: [this.product$.price]
    });
  }
  public updateProduct(): void {
    const updatedProduct = {
      id: this.product$.id,
      name: this.productForm.get("name").value,
      price: this.productForm.get("price").value,
      stock: this.productForm.get("stock").value,
      description: this.productForm.get("description").value
    };
    this.store.dispatch(new productAction.UpdateProduct(updatedProduct));
    this.productForm.reset();
    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 100);
  }

}
