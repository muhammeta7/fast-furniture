import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
import {InventoryComponent} from './inventory/inventory.component';


const routes: Routes = [
  {path: '', component: AddProductComponent},
  {path: 'products', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
