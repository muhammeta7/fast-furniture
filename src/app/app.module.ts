import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddProductComponent} from './add-product/add-product.component';
import {NavigationComponent} from './navigation/navigation.component';
import {InventoryComponent} from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import {ProductInfoComponent} from './product-info/product-info.component';


@NgModule({
    declarations: [
        AppComponent,
        AddProductComponent,
        NavigationComponent,
        InventoryComponent,
        UploadImagesComponent,
        ProductInfoComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
