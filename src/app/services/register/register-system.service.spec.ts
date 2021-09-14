import { TestBed } from '@angular/core/testing';

import { RegisterSystemService } from './register-system.service';

describe('RegisterSystemService', () => {
  let service: RegisterSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
