import { TestBed } from '@angular/core/testing';

import { TakePhotoService } from './take-photo.service';

describe('TakePhotoService', () => {
  let service: TakePhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakePhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
