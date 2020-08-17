import { Component, OnInit } from '@angular/core';
import { TakePhotoService } from '../../services/take-photo.service';
import { StartCameraService } from '../../services/start-camera.service';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-take-photo',
  templateUrl: './btn-take-photo.component.html',
  styleUrls: ['./btn-take-photo.component.css'],
})
export class BtnTakePhotoComponent implements OnInit {
  title = 'Take a photo';
  isVisible = false;
  cameraIcon = faCamera;
  
  constructor(
    public takePhotoService: TakePhotoService,
    private startCameraService: StartCameraService
  ) {}

  ngOnInit(): void {}

  changeVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  onCLick(): void {
    if (this.startCameraService.cameraStarted) {
      this.takePhotoService.sendClickEvent();
    } else {
      alert('Turn on camera first!');
    }
  }
}
