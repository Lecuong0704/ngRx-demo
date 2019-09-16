import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder  } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as productActions from '../state/product.actions';
import { Router } from '@angular/router';
import { AppState } from '../../../state/appState';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() { }

  addProductForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    description: new FormControl('')
  })
  onSubmit() {
    this.store.dispatch(new productActions.CreateProduct(this.addProductForm.value))
   setTimeout(()=>{
      this.router.navigate(['/'])
    },1000) 

  }

}
