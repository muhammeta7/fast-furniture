import {Component, OnInit} from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Bundle} from './models/bundle';
import {Piece} from './models/piece';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-bundle',
    templateUrl: './create-bundle.component.html',
    styleUrls: ['./create-bundle.component.scss']
})
export class CreateBundleComponent implements OnInit {
    bundles: Bundle[] = [];
    bundle: Bundle = {
        id: null,
        name: ''
    };

    constructor(private bundleService: BundleService, private router: Router) {
    }

    ngOnInit() {
        this.getBundles();
    }

    getBundles() {
        this.bundleService.getBundles().subscribe(
            (res) => {
                this.bundles = res;
            }, error => {
                alert('Error getting bundles!');
            }
        );
    }

    createBundle() {
        this.bundleService.createBundle(this.bundle).subscribe(
            res => {
                if (this.bundles.includes(res)){
                    alert('Product already exists');
                } else {
                    this.bundles.push(res);
                    this.router.navigate(['/bundles']);
                }
            },
            (error) => {
                alert('An error has occurred while creating bundle');
            }
        );
    }

}
