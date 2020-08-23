import {Component, OnInit} from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Bundle} from './models/bundle';
import {Piece} from './models/piece';

@Component({
    selector: 'app-create-bundle',
    templateUrl: './create-bundle.component.html',
    styleUrls: ['./create-bundle.component.scss']
})
export class CreateBundleComponent implements OnInit {
    bundles: Bundle[] = [];
    bundle: Bundle = {
        id: null,
        name: '',
        pieces: []
    };

    constructor(private bundleService: BundleService) {
    }

    ngOnInit() {
        this.getBundles();
    }

    getBundles() {
        this.bundleService.getBundles().subscribe(
            res => {
                this.bundles = res;
            }, error => {
                alert('Error getting bundles!');
            }
        );
    }

}
