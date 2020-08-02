import {Component, OnInit} from '@angular/core';
import {ImageService} from '../services/image.service';

@Component({
    selector: 'app-upload-images',
    templateUrl: './upload-images.component.html',
    styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {
    selectedFile: File;


    constructor(private imageService: ImageService) {
    }

    ngOnInit() {
    }

}
