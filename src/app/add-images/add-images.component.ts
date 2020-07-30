import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  ngOnInit() {}

  constructor(private httpClient: HttpClient) {}

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.httpClient.post('http://localhost:8080/api/photos/upload', uploadImageData, { observe: 'response' })
        .subscribe((response) => {
              if (response.status === 200) {
                this.message = 'Image uploaded successfully';
              } else {
                this.message = 'Image not uploaded successfully';
              }
            }
        );


  }

  getImage() {
    this.httpClient.get('http://localhost:8080/api/photos/' + this.imageName)
        .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            }
        );
  }
}
