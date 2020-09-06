import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
// @ts-ignore
import {InventoryComponent} from './inventory/inventory.component';
import {UploadImagesComponent} from './upload-images/upload-images.component';
import {AddImagesComponent} from './add-images/add-images.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {CreateBundleComponent} from './create-bundle/create-bundle.component';
import {AddBundlePieceComponent} from './add-bundle-piece/add-bundle-piece.component';

const routes: Routes = [
    {path: 'add', component: AddProductComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'image', component: UploadImagesComponent},
    {path: 'new', component: AddImagesComponent},
    {path: 'info', component: ProductInfoComponent},
    {path: 'bundles/:id/add', component: CreateBundleComponent},
    {path: 'bundles/add/piece', component: AddBundlePieceComponent},
    {path: '', component: InventoryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
