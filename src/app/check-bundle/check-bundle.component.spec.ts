import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBundleComponent } from './check-bundle.component';

describe('CheckBundleComponent', () => {
  let component: CheckBundleComponent;
  let fixture: ComponentFixture<CheckBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
