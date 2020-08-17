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
import { IncrementalButtonsComponent } from './components/incremental-buttons/incremental-buttons.component';
import { GuestComponent } from './components/guest/guest.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


const routes: Routes = [
  { path: 'host', component: HostComponent },
  { path: 'guest', component: GuestComponent },
  { path: '', redirectTo: 'host', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    VideoCaptureComponent,
    BtnStartCameraComponent,
    BtnTakePhotoComponent,
    ImageHolderComponent,
    SubscriberComponent,
    HostComponent,
    IncrementalButtonsComponent,
    GuestComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faVideo)
  }
}
