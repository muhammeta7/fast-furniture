import {Product} from '../../add-product/model/product';

export interface Image {
    id: number;
    fileName: string;
    type: string;
    product: Product;
}
