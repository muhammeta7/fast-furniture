import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../add-product/model/product';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    inventory: Product[] = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    // @ts-ignore
    public getProducts(): Product[] {
        this.productService.getProducts().subscribe(
            res => {
                this.inventory = res;
            }, error => {
                alert('Error while retrieving data');
            }
        );
    }

}
