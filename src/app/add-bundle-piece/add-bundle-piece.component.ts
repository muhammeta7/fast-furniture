import {Component, OnInit} from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Piece} from './model/piece';
import {Bundle} from '../create-bundle/models/bundle';
import {Product} from '../add-product/model/product';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-add-bundle-piece',
    templateUrl: './add-bundle-piece.component.html',
    styleUrls: ['./add-bundle-piece.component.scss']
})
export class AddBundlePieceComponent implements OnInit {
    piece: Piece = {
        id: null,
        product: null,
        bundle: null,
        defaultQty: 1
    };
    inventory: Product[];
    bundle: Bundle;

    constructor(private bundleService: BundleService, private productService: ProductService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe(
            res => {
                this.inventory = res;
            }, error => {
                alert('Error while retrieving data');
            }
        );
    }


}
