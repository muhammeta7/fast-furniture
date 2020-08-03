import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Image} from '../upload-images/model/image';
import {Product} from '../add-product/model/product';



@Component({
    selector: 'app-add-images',
    templateUrl: './add-images.component.html',
    styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {
    image: Image;
    product: Product;
    selectedFile: File;
    retrievedImage: any;

    base64Data: any;
    retrieveResonse: any;
    message: string;

    ngOnInit(){ }

    constructor(private httpClient: HttpClient){ }

    public onFileChanged(event){
        this.selectedFile = event.target.files[0];
    }

    onUpload(){
        console.log('File' + this.selectedFile);
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
        console.log('ImageData:  ' + uploadImageData.forEach( value => console.log(value)));
        this.httpClient.post('http://localhost:8080/api/images/upload', uploadImageData, {observe: 'response'})
            .subscribe((response) => {
                    if (response.status === 200) {
                        response = this.retrievedImage;
                        console.log( 'Response:  ' + response);
                        this.message = 'Image uploaded successfully';
                    } else {
                        this.message = 'Image not uploaded successfully';
                    }
                }
            );
    }

    getImage(imageName: string) {
        this.httpClient.get('http://localhost:8080/api/images/' + imageName)
            .subscribe(
                res => {
                    this.retrieveResonse = res;
                    this.base64Data = this.retrieveResonse.picByte;
                    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
                }
            );
    }
}
