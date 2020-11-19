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
    quantity = 1;
    inputQty = 1 ;


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


    increaseQuantity(id: number, qty: number){
        if(qty <= 0){
            alert("Please input a number that's bigger.");
        }else{
            this.productService.increaseQuantity(id, qty).subscribe(
                res => {
                    this.selectedProduct.qty += qty;
                    window.location.reload();
                },
                error => {
                    alert('An error has occurred.');
                }
            );
        }
    }

    decreaseQuantity(id: number, qty: number){
        if(qty <= 0){
            alert("Please input a number that's bigger.");
        }else{        
            this.productService.decreaseQuantity(id, qty).subscribe(
                res => {
                    this.selectedProduct.qty -= qty;
                    window.location.reload();
                },
                error => {
                    alert('An error has occurred.');
                }
            );
        }
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

    capitaliseFirstLetter(name: string){
        if(name.charAt(0) === name.charAt(0).toUpperCase()){
            return name;
        } else{
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }

}
