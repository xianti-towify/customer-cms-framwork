import { TestBed } from '@angular/core/testing';

import { CustomerCmsFrameworkService } from './customer-cms-framework.service';

describe('CustomerCmsFramworkService', () => {
  let service: CustomerCmsFrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCmsFrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
