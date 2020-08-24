import { Component, OnInit } from '@angular/core';
import {BundleService} from '../services/bundle.service';
import {Piece} from './model/piece';
import {Product} from '../add-product/model/product';
import {Bundle} from '../create-bundle/models/bundle';

@Component({
  selector: 'app-add-bundle-piece',
  templateUrl: './add-bundle-piece.component.html',
  styleUrls: ['./add-bundle-piece.component.scss']
})
export class AddBundlePieceComponent implements OnInit {
  piece: Piece = {
    id: null,
    product: null,
    bundle: null,
    defaultQty: 1
  };

  constructor(private bundleService: BundleService) { }

  ngOnInit(){
  }

}
