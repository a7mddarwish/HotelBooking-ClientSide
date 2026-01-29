import { TestBed } from '@angular/core/testing';

import { Homeserv } from './homeserv';

describe('Homeserv', () => {
  let service: Homeserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Homeserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
