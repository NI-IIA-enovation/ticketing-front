import { TestBed } from '@angular/core/testing';

import { SnitemService } from './snitem.service';

describe('SnitemService', () => {
  let service: SnitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
