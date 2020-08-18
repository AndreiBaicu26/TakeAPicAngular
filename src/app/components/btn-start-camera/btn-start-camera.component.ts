import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StartCameraService } from '../../services/start-camera.service';
import { SetUpOpenTalkService } from '../../services/set-up-open-talk.service';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-start-camera',
  templateUrl: './btn-start-camera.component.html',
  styleUrls: ['./btn-start-camera.component.css'],
})
export class BtnStartCameraComponent implements OnInit {
  @Output() linkIsVisibleEmitter = new EventEmitter<boolean>();
  btnText = 'Start camera';
  public isStarted = false;
  icon = faVideo;
  constructor(
    private startCameraService: StartCameraService,
    private setUpOpenTalk: SetUpOpenTalkService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  btnPressed(): void {
    if (this.btnText === 'Start camera') {
      this.setUpOpenTalk.initializeSession();
      this.isStarted = true;
      if (this.router.url === '/host') {
        this.linkIsVisibleEmitter.emit(true);
      }
      this.btnText = 'Stop Camera';
    } else {
      this.setUpOpenTalk.closeSession();
      this.isStarted = false;
      ///this.startCameraService.setCameraStarted(false);
      if (this.router.url === '/host') {
        this.linkIsVisibleEmitter.emit(false);
      }
      this.btnText = 'Start camera';
    }
  }
}
