import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StartCameraService } from '../start-camera.service';
import { TakePhotoService } from '../take-photo.service';

interface RectangleDimensions {
  width;
  height;
  top;
  left;
  right;
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

  rectangleDimensions: RectangleDimensions = {
    width: 400,
    height: 400,
    top: 0,
    left: 0,
    right: 0,
  };

  constructor(
    private videoStream: StartCameraService,
    private takePhotoService: TakePhotoService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.videoStream.mediaStream.subscribe((mediaStream) => {
      if (this.video.nativeElement.srcObject !== null && mediaStream == null) {
        this.video.nativeElement.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
      }
      this.video.nativeElement.srcObject = mediaStream;
    });
    this.setRectangleDimensions();

    this.takePhotoService.video.subscribe(() => {
      //this.setRectangleDimensions();
      this.takePhotoService.convertToPhoto(
        this.video.nativeElement,
        this.getCoordinates(),
        this.calculateRatio()
      );
    });
  }

  setRectangleDimensions = () => {
    let videoElem = this.video.nativeElement as HTMLVideoElement;

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

  incrementTop() {
    console.log(this.video.nativeElement.getBoundingClientRect())
    this.rectangleDimensions.height++;
    this.rectangleDimensions.top--;
  }
  incrementBottom() {
    this.rectangleDimensions.height++;
  }
  incrementLeft() {
    
    if (this.rectangle.nativeElement.getBoundingClientRect().left > this.video.nativeElement.getBoundingClientRect().left) {
      this.rectangleDimensions.left--;
      this.rectangleDimensions.width++;
    }
  }
  incrementRight() {
    if (this.rectangle.nativeElement.getBoundingClientRect().right < this.video.nativeElement.getBoundingClientRect().right) {
    this.rectangleDimensions.width++;
    }
  }
}
