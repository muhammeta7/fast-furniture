import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBundlePieceComponent } from './add-bundle-piece.component';

describe('AddBundlePieceComponent', () => {
  let component: AddBundlePieceComponent;
  let fixture: ComponentFixture<AddBundlePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBundlePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBundlePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
