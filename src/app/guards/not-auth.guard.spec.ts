import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { notAuthGuard } from './not-auth.guard';

describe('notAuthGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
