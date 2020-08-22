import {Component, OnInit} from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Bundle} from './models/bundle';

@Component({
    selector: 'app-create-bundle',
    templateUrl: './create-bundle.component.html',
    styleUrls: ['./create-bundle.component.scss']
})
export class CreateBundleComponent implements OnInit {
    bundles: Bundle[] = [];

    constructor(private bundleService: BundleService) {
    }

    ngOnInit(){
    }




}
