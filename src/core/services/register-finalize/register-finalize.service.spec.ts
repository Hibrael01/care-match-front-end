import { TestBed } from '@angular/core/testing';

import { RegisterFinalizeService } from './register-finalize.service';

describe('RegisterFinalizeService', () => {
  let service: RegisterFinalizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFinalizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
