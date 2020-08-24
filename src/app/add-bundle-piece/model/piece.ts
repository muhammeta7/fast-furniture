import {Product} from '../../add-product/model/product';
import {Bundle} from '../../create-bundle/models/bundle';

export interface Piece {
    id: number;
    product: Product;
    bundle: Bundle;
    defaultQty: number;
}
