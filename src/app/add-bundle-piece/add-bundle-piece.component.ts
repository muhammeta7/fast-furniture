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
    qty = 1;
    paramId: number;
    private routeSub: Subscription;

    constructor(private bundleService: BundleService, private productService: ProductService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProducts();
        this.routeSub = this.route.params.subscribe(params => {
            console.log(params);
            this.paramId = +params['id'].substring(3);
            console.log(this.paramId);
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
        console.log(this.paramId + "/ " + this.product.id +"/ "+ this.qty);
        this.bundleService.addManyToBundle(this.paramId, this.product.id, this.qty).subscribe(
            (res) => {
                console.log(this.paramId + "KLSJDLAKSJD" + this.product.id);
                this.bundle = res;
                console.log(res);
                window.location.reload();
            }, error => {
                alert('An error has occurred.');
            }
        );
    }
}
