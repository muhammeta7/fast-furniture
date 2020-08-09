import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../add-product/model/product';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    inventory: Product[] = [];
    selectedProduct: Product;

    constructor(private productService: ProductService) {
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

    onClick(id: number){
        this.selectedProduct = this.inventory.find(x => x.id === id);
        console.log(this.selectedProduct.name);
    }

    updateQuantity(id: number, qty: number){
        this.productService.increaseQuantity(id, qty).subscribe(
            res => {
                this.selectedProduct.qty += qty;
                this.selectedProduct.qty = res.qty;
            },
            error => {
                alert('An error has occurred.');
            }
        );
    }

}
