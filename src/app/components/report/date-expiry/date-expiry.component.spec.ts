import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExpiryComponent } from './date-expiry.component';

describe('DateExpiryComponent', () => {
  let component: DateExpiryComponent;
  let fixture: ComponentFixture<DateExpiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateExpiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
