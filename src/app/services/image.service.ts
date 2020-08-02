import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Image} from '../upload-images/model/image';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    private BASE_URL = 'http://localhost8080/api/images';

    constructor(private httpClient: HttpClient) {
    }

    uploadImage(image: Image): Observable<Image> {
        return this.httpClient.post<Image>(this.BASE_URL + '/upload', image);
    }

}
