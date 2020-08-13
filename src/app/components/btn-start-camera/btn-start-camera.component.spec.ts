import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStartCameraComponent } from './btn-start-camera.component';

describe('BtnStartCameraComponent', () => {
  let component: BtnStartCameraComponent;
  let fixture: ComponentFixture<BtnStartCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnStartCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnStartCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
