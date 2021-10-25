import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareOrdersComponent } from './prepare-orders.component';

describe('PrepareOrdersComponent', () => {
  let component: PrepareOrdersComponent;
  let fixture: ComponentFixture<PrepareOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
