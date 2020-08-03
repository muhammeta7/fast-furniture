import {Component, OnInit} from '@angular/core';
import {ImageService} from '../services/image.service';
import {Image} from './model/image';

@Component({
    selector: 'app-upload-images',
    templateUrl: './upload-images.component.html',
    styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {
    image: Image;
    selectedFile: File;
    message: string;

    constructor(private imageService: ImageService) {
    }

    ngOnInit() {}

    public onFileChanged(event){
        this.selectedFile = event.target.files[0];
    }

    uploadImage(){
        console.log(this.selectedFile);
        const uploadImageData = new FormData();
        uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
        this.imageService.uploadImage(this.image).subscribe((response) => {
                if (response.status === 200) {
                    this.message = 'Image uploaded successfully';
                } else {
                    this.message = 'Image not uploaded successfully';
                }
            }
        );
    }

}
