import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';


const routes: Routes = [
  {
    path:'',
    component: ProductListComponent
  },
  {
    path:'product-edit/:slug',
    component: ProductEditComponent
  },
  {
    path:'product-create',
    component: ProductCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
