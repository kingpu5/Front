import { TestBed } from '@angular/core/testing';

import { CongeRetardService } from './conge-retard.service';

describe('CongeRetardService', () => {
  let service: CongeRetardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongeRetardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
