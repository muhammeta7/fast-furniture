import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../add-product/model/product';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private BASE_URL = 'http://fastfurniture-api.herokuapp/api/products';

    constructor(private http: HttpClient) {}

    createProduct(product: Product): Observable<Product>{
        return this.http.post<Product>(this.BASE_URL, product);
    }

    getProductById(id: number): Observable<Product>{
        return this.http.get<Product>(this.BASE_URL + '/' + id);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.BASE_URL);
    }

    getCategories(): Observable<string[]>{
        return this.http.get<string[]>(this.BASE_URL + '/category/index');
    }

    getLocations(): Observable<string[]>{
        return this.http.get<string[]>(this.BASE_URL + '/location/index');
    }

    increaseQuantity(id: number, qty: number){
        const url = `${this.BASE_URL}/${id}/increase/qty`;
        const param = new FormData();
        // @ts-ignore
        param.append('qty', qty);
        return this.http.put<Product>(url, param);
    }

    decreaseQuantity(id: number, qty: number){
        const url = `${this.BASE_URL}/${id}/decrease/qty`;
        const param = new FormData();
        // @ts-ignore
        param.append('qty', qty);
        return this.http.put<Product>(url, param);
    }
}
