import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/product-info/product-info.component.spec.ts
import { ProductInfoComponent } from './product-info.component';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoComponent ]
=======
import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductComponent ]
>>>>>>> 0769839a682a2c5e288725f91c39ae7154962266:src/app/create-product/create-product.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/product-info/product-info.component.spec.ts
    fixture = TestBed.createComponent(ProductInfoComponent);
=======
    fixture = TestBed.createComponent(CreateProductComponent);
>>>>>>> 0769839a682a2c5e288725f91c39ae7154962266:src/app/create-product/create-product.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
