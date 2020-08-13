import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoCaptureComponent } from './components/video-capture/video-capture.component';
import { BtnStartCameraComponent } from './components/btn-start-camera/btn-start-camera.component';
import { BtnTakePhotoComponent } from './components/btn-take-photo/btn-take-photo.component';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { HostComponent } from './components/host/host.component';
import { GreenSquareComponent } from './components/green-square/green-square.component';
import { IncrementalButtonsComponent } from './components/incremental-buttons/incremental-buttons.component';

const routes: Routes =[
  {path: 'moderator', component:}
]

@NgModule({
  declarations: [
    AppComponent,
    VideoCaptureComponent,
    BtnStartCameraComponent,
    BtnTakePhotoComponent,
    ImageHolderComponent,
    SubscriberComponent,
    HostComponent,
    GreenSquareComponent,
    IncrementalButtonsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
