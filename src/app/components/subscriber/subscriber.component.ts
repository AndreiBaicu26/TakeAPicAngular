import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SetUpOpenTalkService } from '../../services/set-up-open-talk.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css'],
})
export class SubscriberComponent implements OnInit {
  @ViewChild('subscriber') subscriber: ElementRef;
  @Input() videoElem: ElementRef;
  subscriberObj;
  constructor(private openTok: SetUpOpenTalkService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.openTok.subscriberObs.subscribe((connectionDetails) => {
      this.subscriberObj = connectionDetails.session.subscribe(
        connectionDetails.event.stream,
        {
          insertDefaultUI: false,
        },
        this.openTok.handleError
      );

      this.subscriberObj.on('videoElementCreated', (event) => {
        console.log(event);
        this.videoElem.nativeElement.srcObject = event.element.srcObject;
      });

      //this.videoElem.nativeElement.srcObject = this.subscriberObj.element.querySelector(
      // 'video'
      //).srcObject;
    });
  }
}
