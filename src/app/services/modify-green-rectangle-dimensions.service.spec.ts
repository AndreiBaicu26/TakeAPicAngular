import { TestBed } from '@angular/core/testing';

import { ModifyGreenRectangleDimensionsService } from './modify-green-rectangle-dimensions.service';

describe('ModifyGreenRectangleDimensionsService', () => {
  let service: ModifyGreenRectangleDimensionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyGreenRectangleDimensionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
