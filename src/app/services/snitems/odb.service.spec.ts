import { TestBed } from '@angular/core/testing';

import { ODBService } from './odb.service';

describe('ODBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ODBService = TestBed.get(ODBService);
    expect(service).toBeTruthy();
  });
});
