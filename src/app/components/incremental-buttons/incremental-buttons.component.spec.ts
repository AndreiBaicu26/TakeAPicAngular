import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalButtonsComponent } from './incremental-buttons.component';

describe('IncrementalButtonsComponent', () => {
  let component: IncrementalButtonsComponent;
  let fixture: ComponentFixture<IncrementalButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
