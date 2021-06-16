import { TestBed } from '@angular/core/testing';

import { CongeMaladieService } from './conge-maladie.service';

describe('CongeMaladieService', () => {
  let service: CongeMaladieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongeMaladieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
