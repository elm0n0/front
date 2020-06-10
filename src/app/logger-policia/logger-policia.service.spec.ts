import { TestBed } from '@angular/core/testing';

import { LoggerPoliciaService } from './logger-policia.service';

describe('LoggerPoliciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerPoliciaService = TestBed.get(LoggerPoliciaService);
    expect(service).toBeTruthy();
  });
});
