import { TestBed } from '@angular/core/testing';

import { PassagensService } from './passagens';

describe('PassagensService', () => {
  let service: PassagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
