import { TestBed } from '@angular/core/testing';

import { MiddleLayerService } from './middle-layer.service';

describe('MiddleLayerService', () => {
  let service: MiddleLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiddleLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
