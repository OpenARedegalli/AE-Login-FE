import { TestBed } from '@angular/core/testing';

import { AeLoginService } from './ae-login.service';

describe('AeLoginService', () => {
  let service: AeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
