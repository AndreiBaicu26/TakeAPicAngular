import { TestBed } from '@angular/core/testing';

import { SetUpOpenTalkService } from './set-up-open-talk.service';

describe('SetUpOpenTalkService', () => {
  let service: SetUpOpenTalkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetUpOpenTalkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
