import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface RectangleDimensions {
  width;
  height;
  top;
  left;
}
interface RelativeCoords {
  x: number;
  y: number;
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

  convertToPhoto(video: HTMLVideoElement, rectangleDimensions: RelativeCoords) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    console.log(rectangleDimensions);
    console.log(canvas.width, canvas.height);

    canvas
      .getContext('2d')
      .drawImage(
        video,
        rectangleDimensions.x,
        rectangleDimensions.y,
        600,
        600,
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
}
