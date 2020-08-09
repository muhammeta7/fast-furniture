import { Component, OnInit } from '@angular/core';
import {Product} from '../add-product/model/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  currentProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProductById(id: number) {
      this.productService.getProductById(id).subscribe(
          res => {
              this.currentProduct = res;
          },
          error => {
              alert('An error has occurred.');
          }
      );
  }

}
