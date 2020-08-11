import { Component, OnInit } from '@angular/core';
import { TakePhotoService } from '../take-photo.service';
import { StartCameraService } from '../start-camera.service';
@Component({
  selector: 'app-btn-take-photo',
  templateUrl: './btn-take-photo.component.html',
  styleUrls: ['./btn-take-photo.component.css'],
})
export class BtnTakePhotoComponent implements OnInit {
  title = 'Take a photo';
  isVisible = false;

  constructor(
    public takePhotoService: TakePhotoService,
    private startCameraService: StartCameraService
  ) {}

  changeVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {}

  onCLick(): void {
    if (this.startCameraService.cameraStarted) {
      this.takePhotoService.sendClickEvent();
    } else {
      alert('Turn on camera first!');
    }
  }
}
