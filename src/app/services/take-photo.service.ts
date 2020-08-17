import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
@Injectable({
  providedIn: 'root',
})
export class TakePhotoService {
  constructor() {}

  public video = new Subject<any>();
  public canvas = new Subject<any>();

  sendClickEvent() {
    this.video.next(2);
  }

  convertToPhoto(video: HTMLVideoElement, rectangleDimensions: RelativeCoords, ratio:number) {
    const canvas = document.createElement('canvas');
    const topDimension = this.getTopDimensions(video, rectangleDimensions);
    const percentageLeft = (rectangleDimensions.left / video.offsetWidth) * 100;
    const percentageWidth = (rectangleDimensions.width / video.offsetWidth) * 100;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const resultLeftPosition = (percentageLeft / 100) * canvas.width;
    const resultWidth = (percentageWidth / 100) * canvas.width;
    const resultHeight = resultWidth/ratio;
    
    canvas
      .getContext('2d')
      .drawImage(
        video,
        resultLeftPosition,
        topDimension,
        resultWidth,
        resultHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );

    const image = canvas.toDataURL('image/png');
    const imageData = {
      width: canvas.width,
      height: canvas.height,
      imageStream: image,
    };

    this.canvas.next(imageData);
  }

  getTopDimensions(video: HTMLVideoElement,rectangleDimensions: RelativeCoords
  ): number {
    const actualVideoHeight =(video.videoHeight * video.height) / video.videoWidth;
    const topLength = (video.height - actualVideoHeight) / 2;
    const diffBetweenTopRectangleAndTopVideo = rectangleDimensions.top - topLength;

    return diffBetweenTopRectangleAndTopVideo;
  }

  
}
