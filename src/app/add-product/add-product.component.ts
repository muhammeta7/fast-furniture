import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from './model/product';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    inventory: Product[] = [];
    categories: string[] = [];
    locations: string[] = [];

    product: Product;

    constructor(
        private productService: ProductService,
        private router: Router
    ){}

    ngOnInit() {
        this.getCategories();
        this.getLocations();
    }

    createProduct() {
        this.productService.createProduct(this.product).subscribe(
            (res) => {
                if (this.inventory.includes(res)) {
                    alert('Product already exists');
                } else {
                    this.inventory.push(res);
                    this.router.navigate(['/products']);
                }
            },
            (error) => {
                alert('An error has occurred while creating product');
            }
        );
    }

    getCategories() {
        this.productService.getCategories().subscribe(
            (res) => {
                res.forEach((element) => {
                    this.categories.push(element);
                });
            }, (error) => {
                alert('Error while getting categories');
            }
        );
    }

    getLocations() {
        this.productService.getLocations().subscribe(
            (res) => {
                res.forEach((element) => {
                    this.locations.push(element);
                    console.log(element);
                });
            }, (error) => {
                alert('Error while getting locations');
            }
        );
    }
}
