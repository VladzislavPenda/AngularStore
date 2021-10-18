import { TestBed } from '@angular/core/testing';

import { OverlayRootService } from './overlay-root.service';

describe('OverlayRootService', () => {
  let service: OverlayRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
