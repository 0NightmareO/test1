import { TestBed } from '@angular/core/testing';

import { NewListContentService } from './new-list-content.service';

describe('NewListContentService', () => {
  let service: NewListContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewListContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
