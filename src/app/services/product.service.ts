import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../add-product/model/product';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private BASE_URL = 'http://localhost:8080/api/products';

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.BASE_URL);
    }

    createProduct(product: Product): Observable<Product>{
        return this.httpClient.post<Product>(this.BASE_URL, product);
    }

    getCategories(): Observable<string[]>{
        return this.httpClient.get<string[]>(this.BASE_URL + '/category/index');
    }

    getLocations(): Observable<string[]>{
        return this.httpClient.get<string[]>(this.BASE_URL + '/abbr/index');
    }

}
