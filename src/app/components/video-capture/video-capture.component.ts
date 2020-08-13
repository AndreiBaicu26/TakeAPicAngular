import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { StartCameraService } from '../../services/start-camera.service';
import { TakePhotoService } from '../../services/take-photo.service';
import { SetUpOpenTalkService } from '../../services/set-up-open-talk.service';

interface RectangleDimensions {
  width;
  height;
  top;
  left;
}

interface RelativeCoords {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-video-capture',
  templateUrl: './video-capture.component.html',
  styleUrls: ['./video-capture.component.css'],
})
export class VideoCaptureComponent implements OnInit {
  @ViewChild('videoElement') video: ElementRef;
  @ViewChild('rectangle') rectangle: ElementRef;
  @ViewChild('publisher') publisher: ElementRef;

  public incrementSquareData: string;

  @Input('receivedIncrementSquareData')
  public set receivedIncrementSquareData(v: string) {
    this.incrementGreenSqure(v);
  }

  rectangleDimensions: RectangleDimensions = {
    width: 400,
    height: 400,
    top: 0,
    left: 0,
  };

  constructor(
    private videoStream: StartCameraService,
    private takePhotoService: TakePhotoService,
    private openTalk: SetUpOpenTalkService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => this.setRectangleDimensions(), 0);
    //media stream subscription
    this.videoStream.mediaStream.subscribe((mediaStream) => {
      if (this.video.nativeElement.srcObject !== null && mediaStream == null) {
        this.video.nativeElement.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
      }

      //open talk subscription
      this.openTalk.publisherObs.subscribe(() => {
        const publisher = this.openTalk.getOT().initPublisher(
          this.publisher.nativeElement,
          {
            insertMode: 'append',
            width: '100%',
            height: '100%',
          },
          (err) => this.openTalk.handleError(err)
        );
        this.openTalk.connect(publisher);
      });
    });

    //take photo subscription
    this.takePhotoService.video.subscribe(() => {
      this.takePhotoService.convertToPhoto(
        this.video.nativeElement,
        this.getCoordinates(),
        this.calculateRatio()
      );
    });
  }

  setRectangleDimensions = () => {
    let videoElem = this.video.nativeElement as HTMLVideoElement;
    console.log('changed');
    this.rectangleDimensions.width = videoElem.width - 100;
    this.rectangleDimensions.height = videoElem.height - 100;
    this.rectangleDimensions.top = 50;
    this.rectangleDimensions.left = 50;
  };

  getCoordinates(): RelativeCoords {
    var parentPos = this.video.nativeElement.getBoundingClientRect();
    var rectanglePost = this.rectangle.nativeElement.getBoundingClientRect();

    var relativePos: RelativeCoords = {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };

    relativePos.left = rectanglePost.left - parentPos.left;
    relativePos.top = rectanglePost.top - parentPos.top;
    relativePos.width = rectanglePost.width;
    relativePos.height = rectanglePost.height;
    return relativePos;
  }

  calculateRatio(): number {
    const ratio =
      this.rectangleDimensions.width / this.rectangleDimensions.height;
    return ratio;
  }

  incrementGreenSqure(incrementSquareData) {
    console.log(incrementSquareData);
    switch (incrementSquareData) {
      case 'top': {
        this.rectangleDimensions.height++;
        this.rectangleDimensions.top--;
        break;
      }

      case 'height': {
        this.rectangleDimensions.height++;
        break;
      }

      case 'left': {
        if (
          this.rectangle.nativeElement.getBoundingClientRect().left >
          this.video.nativeElement.getBoundingClientRect().left
        ) {
          this.rectangleDimensions.left--;
          this.rectangleDimensions.width++;
        }
        break;
      }

      case 'width': {
        if (
          this.rectangle.nativeElement.getBoundingClientRect().right <
          this.video.nativeElement.getBoundingClientRect().right
        ) {
          this.rectangleDimensions.width++;
        }
        break;
      }
    }
  }
}
