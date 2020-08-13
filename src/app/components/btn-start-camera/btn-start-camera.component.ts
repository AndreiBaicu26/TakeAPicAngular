import { Component, OnInit } from '@angular/core';
import { StartCameraService } from '../../services/start-camera.service';
import { SetUpOpenTalkService } from '../../services/set-up-open-talk.service';
@Component({
  selector: 'app-btn-start-camera',
  templateUrl: './btn-start-camera.component.html',
  styleUrls: ['./btn-start-camera.component.css'],
})
export class BtnStartCameraComponent implements OnInit {
  constructor(
    private startCameraService: StartCameraService,
    private setUpOpenTalk: SetUpOpenTalkService
  ) {}
  btnText = 'Start camera';
  ngOnInit(): void {}

  btnPressed(): void {
    if (this.btnText === 'Start camera') {
      this.startCameraService.startCamera(true);
      this.setUpOpenTalk.initializeSession();
      this.btnText = 'Stop Camera';
    } else {
      this.startCameraService.startCamera(false);
      this.setUpOpenTalk.closeSession();
      this.btnText = 'Start camera';
    }
  }
}
