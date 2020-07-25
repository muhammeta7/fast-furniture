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

    product: Product = {
        id: null,
        name: '',
        abbreviation: '',
        location: '',
        length: null,
        width: null,
        depth: null,
        qty: null,
        description: '',
        category: ''
    };

    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    ngOnInit() {}

    createProduct(){
        this.productService.createProduct(this.product).subscribe(
            (res)  => {
                if (this.inventory.includes(res)){
                    alert('Product already exists');
                }else{
                    this.inventory.push(res);
                    this.router.navigate(['/products']);
                    console.log('Did work!');
                    console.log(res);
                }
            },
            (error) => {
                alert('An error has occurred while creating product');
            }
        );
    }
}
