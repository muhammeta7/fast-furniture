import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AddProductComponent} from './add-product/add-product.component';
import {NavigationComponent} from './navigation/navigation.component';
import {InventoryComponent} from './inventory/inventory.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import { CreateBundleComponent } from './create-bundle/create-bundle.component';
import { AddBundlePieceComponent } from './add-bundle-piece/add-bundle-piece.component';





@NgModule({
    declarations: [
        AppComponent,
        AddProductComponent,
        NavigationComponent,
        InventoryComponent,
        UploadImagesComponent,
        ProductInfoComponent,
        CreateBundleComponent,
        AddBundlePieceComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        ButtonsModule,
        MatToolbarModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
