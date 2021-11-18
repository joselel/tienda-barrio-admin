import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitProductsComponent } from './profit-products.component';

describe('ProfitProductsComponent', () => {
  let component: ProfitProductsComponent;
  let fixture: ComponentFixture<ProfitProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
