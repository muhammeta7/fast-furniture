import { TestBed } from '@angular/core/testing';

import { BundlePieceService } from './bundle-piece.service';

describe('BundlePieceService', () => {
  let service: BundlePieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundlePieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
