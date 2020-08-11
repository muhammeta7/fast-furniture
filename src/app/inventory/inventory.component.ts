import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../add-product/model/product';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    inventory: Product[] = [];
    selectedProduct: Product;
    display: boolean;

    constructor(private productService: ProductService, private router: Router) {
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


    increaseQuantity(id: number, qty: number){
        this.productService.increaseQuantity(id, qty).subscribe(
            res => {
                this.selectedProduct.qty += qty;
                this.router.navigate(['products']);
            },
            error => {
                alert('An error has occurred.');
            }
        );
    }

    decreaseQuantity(id: number, qty: number){
        this.productService.decreaseQuantity(id, qty).subscribe(
            res => {
                if (res.qty - qty >= 0){
                    this.selectedProduct.qty -= qty;
                    this.router.navigate(['products']);
                }
            },
            error => {
                alert('An error has occurred.');
            }
        );
    }

    getProductById(id: number) {
        this.productService.getProductById(id).subscribe(
            res => {
                this.selectedProduct = res;
                console.log(res);
            },
            error => {
                alert('An error has occurred.');
            }
        );
    }

}
