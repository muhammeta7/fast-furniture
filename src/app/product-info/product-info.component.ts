import {Component, OnInit, TemplateRef} from '@angular/core';
import {Product} from '../add-product/model/product';
import {ProductService} from '../services/product.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-product-info',
    templateUrl: './product-info.component.html',
    styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
    modalRef: BsModalRef;

    constructor(private productService: ProductService, private modalService: BsModalService) {
    }

    ngOnInit() {
    }

    openModalWithClass(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, {class: 'gray modal-lg'})
        );
    }

}
