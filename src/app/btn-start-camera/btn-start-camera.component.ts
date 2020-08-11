import { Component, OnInit } from '@angular/core';
import { StartCameraService } from '../start-camera.service';

@Component({
  selector: 'app-btn-start-camera',
  templateUrl: './btn-start-camera.component.html',
  styleUrls: ['./btn-start-camera.component.css'],
})
export class BtnStartCameraComponent implements OnInit {
  constructor(private startCameraService: StartCameraService) {}
  btnText = 'Start camera';
  ngOnInit(): void {}

  btnPressed(): void {
    if (this.btnText === 'Start camera') {
      this.startCameraService.startCamera(true);
      this.btnText = 'Stop Camera';
    } else {
      this.startCameraService.startCamera(false);
      this.btnText = 'Start camera';
    }
  }
}
