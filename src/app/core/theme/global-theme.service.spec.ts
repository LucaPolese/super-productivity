import { TestBed } from '@angular/core/testing';

import { GlobalThemeService } from './global-theme.service';

describe('GlobalThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalThemeService = TestBed.get(GlobalThemeService);
    expect(service).toBeTruthy();
  });
});
