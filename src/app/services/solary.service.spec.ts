import { TestBed } from '@angular/core/testing';

import { SolaryService } from './solary.service';

describe('SolaryService', () => {
  let service: SolaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
