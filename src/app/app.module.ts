import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoCaptureComponent } from './video-capture/video-capture.component';
import { BtnStartCameraComponent } from './btn-start-camera/btn-start-camera.component';
import { BtnTakePhotoComponent } from './btn-take-photo/btn-take-photo.component';
import { ImageHolderComponent } from './image-holder/image-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoCaptureComponent,
    BtnStartCameraComponent,
    BtnTakePhotoComponent,
    ImageHolderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
