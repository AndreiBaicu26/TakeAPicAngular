import { TestBed } from '@angular/core/testing';

import { StartCameraService } from './start-camera.service';

describe('StartCameraService', () => {
  let service: StartCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
