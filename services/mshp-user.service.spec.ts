import { TestBed } from '@angular/core/testing';

import { MshpUserService } from './mshp-user.service';

describe('MshpUserService', () => {
  let service: MshpUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MshpUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
