import { TestBed } from '@angular/core/testing';

import { CustomerCmsFramworkService } from './customer-cms-framwork.service';

describe('CustomerCmsFramworkService', () => {
  let service: CustomerCmsFramworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCmsFramworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
