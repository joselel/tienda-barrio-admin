import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBestSellersComponent } from './products-best-sellers.component';

describe('ProductsBestSellersComponent', () => {
  let component: ProductsBestSellersComponent;
  let fixture: ComponentFixture<ProductsBestSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBestSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
