import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCmsFrameworkComponent } from './customer-cms-framework.component';

describe('CustomerCmsFramworkComponent', () => {
  let component: CustomerCmsFrameworkComponent;
  let fixture: ComponentFixture<CustomerCmsFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCmsFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCmsFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
