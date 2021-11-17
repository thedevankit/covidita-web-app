import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeailsComponent } from './product-deails.component';

describe('ProductDeailsComponent', () => {
  let component: ProductDeailsComponent;
  let fixture: ComponentFixture<ProductDeailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
