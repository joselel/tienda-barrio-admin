import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMonthlyComponent } from './sales-monthly.component';

describe('SalesMonthlyComponent', () => {
  let component: SalesMonthlyComponent;
  let fixture: ComponentFixture<SalesMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
