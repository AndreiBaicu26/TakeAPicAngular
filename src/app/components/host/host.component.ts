import { Component, OnInit, ViewChild } from '@angular/core';
import { BtnStartCameraComponent } from '../btn-start-camera/btn-start-camera.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
})

export class HostComponent implements OnInit {
  @ViewChild(BtnStartCameraComponent) btnStartCamera: BtnStartCameraComponent;
  incrementGreenSquare: string;
  linkIsVisible: false;

  constructor() {}

  ngOnInit(): void {}

  public changeVisibility(event) {
    this.linkIsVisible = event;
  }
}
