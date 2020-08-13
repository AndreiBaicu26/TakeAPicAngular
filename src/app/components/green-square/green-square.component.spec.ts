import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSquareComponent } from './green-square.component';

describe('GreenSquareComponent', () => {
  let component: GreenSquareComponent;
  let fixture: ComponentFixture<GreenSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
