import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCmsFramworkComponent } from './customer-cms-framwork.component';

describe('CustomerCmsFramworkComponent', () => {
  let component: CustomerCmsFramworkComponent;
  let fixture: ComponentFixture<CustomerCmsFramworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCmsFramworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCmsFramworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
