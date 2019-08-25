import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './state/product.effects';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule { }
