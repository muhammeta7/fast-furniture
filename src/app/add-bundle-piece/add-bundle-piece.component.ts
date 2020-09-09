import {Component, OnInit} from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Piece} from './model/piece';
import {Bundle} from '../create-bundle/models/bundle';
import {Product} from '../add-product/model/product';
import {ProductService} from '../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

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
    private routeSub: Subscription;

    constructor(private bundleService: BundleService, private productService: ProductService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProducts();
        this.routeSub = this.route.params.subscribe(params => {
            console.log(params);
        });
    }

    getBundleById(){
        this.bundleService.getBundleById(this.bundle.id).subscribe(
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

    addPieceToBundle(){
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
