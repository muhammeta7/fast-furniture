import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bundle} from '../check-bundle/models/bundle';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BundleService {
    private BASE_URL = 'http://localhost:8080/api/bundle';

    constructor(private http: HttpClient) {
    }

    createBundle(bundle: Bundle): Observable<Bundle> {
        return this.http.post<Bundle>(this.BASE_URL, bundle);
    }

    addToBundle(bundleId: number, productId: number, qty: number) {
        const url = `${this.BASE_URL}/${bundleId}/add`;
        const param = new FormData();
        // @ts-ignore
        param.append({
            product_id: productId,
            qty
        });
        return this.http.put<Bundle>(url, param);
    }

}




