import {Product} from '../../add-product/model/product';
import {Bundle} from './bundle';

export interface Piece {
    id: number;
    product: Product;
    bundle: Bundle;
    defaultQty: number;
}
