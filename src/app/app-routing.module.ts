import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
import {InventoryComponent} from './inventory/inventory.component';
import {UploadImagesComponent} from './upload-images/upload-images.component';


const routes: Routes = [
    {path: 'add', component: AddProductComponent},
    {path: 'products', component: InventoryComponent},
    {path: 'image', component: UploadImagesComponent},
    {path: '' , component: InventoryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
