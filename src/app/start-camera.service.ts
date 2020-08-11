import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartCameraService {
  mediaStream = new BehaviorSubject(null);
  constructor() {}
 cameraStarted:boolean = false;
 
  openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
  };

  startCamera = async (shouldOpenCamera: boolean) => {
    try {
     
      if (shouldOpenCamera) {
        const stream = await this.openMediaDevices({ video: true });
        this.mediaStream.next(stream);
        this.cameraStarted=true;
      } else {
        
        this.mediaStream.next(null);
        this.cameraStarted = false;
      }
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  };
}
