import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Image} from '../upload-images/model/image';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    private BASE_URL = 'https://ff-backend-api.herokuapp.com/api/products/';

    constructor(private httpClient: HttpClient) {
    }

    uploadImage(image: Image): Observable<any> {
        return this.httpClient.post<Image>(this.BASE_URL, image);
    }

    getImageByName(name: string): any {
        return this.httpClient.get(this.BASE_URL +  name);
    }
}
