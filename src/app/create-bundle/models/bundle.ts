import {Piece} from './piece';

export interface Bundle {
    id: number;
    name: string;
    pieces: Piece[];
}
