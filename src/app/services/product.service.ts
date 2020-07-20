import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../add-product/model/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient){}

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.BASE_URL);
  }



}
