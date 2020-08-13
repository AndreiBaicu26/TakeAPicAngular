import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTakePhotoComponent } from './btn-take-photo.component';

describe('BtnTakePhotoComponent', () => {
  let component: BtnTakePhotoComponent;
  let fixture: ComponentFixture<BtnTakePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnTakePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnTakePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
