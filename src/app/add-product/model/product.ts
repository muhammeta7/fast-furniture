import {Image} from '../../upload-images/model/image';

export interface Product {
    id: number;
    name: string;
    abbreviation: string;
    location: string;
    length: number;
    width: number;
    depth: number;
    qty: number;
    description: string;
    category: string;
    photos: Image[];
}
