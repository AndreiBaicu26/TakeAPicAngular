import { Injectable } from '@angular/core';
import * as OT from '@opentok/client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SetUpOpenTalkService {
  constructor() {}

  private apiKey = '46883674';
  private sessionId =
    '1_MX40Njg4MzY3NH5-MTU5NzMzMzk4NjI4MH5jWmppcE10VHdoT0xBMFZRc1dEQU80dkN-fg';
  private token =
    'T1==cGFydG5lcl9pZD00Njg4MzY3NCZzaWc9MDUzZTdhNzU5ODhhN2VkZDI0MDhjNWVjNTBjYjEyMWYxMTk4ZDI1ZjpzZXNzaW9uX2lkPTFfTVg0ME5qZzRNelkzTkg1LU1UVTVOek16TXprNE5qSTRNSDVqV21wcGNFMTBWSGRvVDB4Qk1GWlJjMWRFUVU4MGRrTi1mZyZjcmVhdGVfdGltZT0xNTk3MzMzOTk1Jm5vbmNlPTAuMjU2Mjk5MjQzMTkzNzEzNDQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5NzMzNzU5NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  public publisherObs = new Subject<any>();
  public subscriberObs = new Subject<any>();
  private session;
  private publisher;

  getOT() {
    return OT;
  }

  getSession() {
    return this.session;
  }
  public initializeSession() {
    this.session = this.getOT().initSession(this.apiKey, this.sessionId);
    this.publisherObs.next();

    this.session.on('streamCreated', (event) => {
      this.subscriberObs.next({ session: this.session, event });
    });

    // this.session.connect(this.token, (err) => {
    //   if (err) {
    //     this.handleError(err);
    //   } else {
    //     this.publisherObs.next({session: this.session , OT });
    //     //session.publish(publisher, this.handleError);
    //   }
    // });
  }

  public closeSession() {
    this.session.disconnect();
    this.session.unpublish(this.publisher);
    this.publisher.destroy();
  }

  public connect(publisher) {
    this.session.connect(this.token, (err) => {
      if (err) {
        this.handleError(err);
      } else {
        this.publisher = publisher;
        this.session.publish(publisher, this.handleError);
      }
    });
  }

  public handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

  // session.on("streamCreated", function (event) {
  //   session.subscribe(
  //     event.stream,
  //     "subscriber",
  //     {
  //       insertMode: "append",
  //       width: "100%",
  //       height: "100%",
  //     },
  //     handleError
  //   );
  // });
}
