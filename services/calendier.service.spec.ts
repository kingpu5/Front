import { TestBed } from '@angular/core/testing';

import { CalendierService } from './calendier.service';

describe('CalendierService', () => {
  let service: CalendierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
