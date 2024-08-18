import { TestBed } from '@angular/core/testing';

import { ApproveLandlordApplicationService } from './approve-landlord-application.service';

describe('ApproveLandlordApplicationService', () => {
  let service: ApproveLandlordApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveLandlordApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
