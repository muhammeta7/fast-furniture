import {Component, OnInit} from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Piece} from './model/piece';
import {Bundle} from '../create-bundle/models/bundle';
import {Product} from '../add-product/model/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

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
    product: Product;
    bundle: Bundle;
    qty: number;
    subscribedParam = '';

    constructor(private bundleService: BundleService, private productService: ProductService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProducts();
        this.route.paramMap.subscribe(
            params => {
                this.subscribedParam = params.get('id');
                console.log('Is this what we want    ' + this.subscribedParam);
            }
        );
    }

    getBundleById(id: number) {
        this.bundleService.getBundleById(id).subscribe(
            (res) => {
                this.bundle = res;
                console.log(res.id);
            }, error => {
                alert('Error getting bundle.');
            }
        );
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

    addPieceToBundle() {
        this.bundleService.addToBundle(this.bundle.id, this.product.id, this.qty).subscribe(
            (res) => {
                this.bundle = res;
                console.log(res);
                window.location.reload();
            }, error => {
                alert('An error has occurred.');
            }
        );
    }
}
