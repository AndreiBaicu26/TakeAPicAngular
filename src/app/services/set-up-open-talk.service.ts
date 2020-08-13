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
    '2_MX40Njg4MzY3NH5-MTU5NzMwNjY5NDI1OX5rWkxKZFF5Y1Uxd2dpNEVONy8wcHFIRUl-fg';
  private token =
    'T1==cGFydG5lcl9pZD00Njg4MzY3NCZzaWc9NzI4OTJkMDNjNzMzNGViYWY0OGEyNjE5MzhhMTU1ZTM4YWVlMzZlNjpzZXNzaW9uX2lkPTJfTVg0ME5qZzRNelkzTkg1LU1UVTVOek13TmpZNU5ESTFPWDVyV2t4S1pGRjVZMVV4ZDJkcE5FVk9OeTh3Y0hGSVJVbC1mZyZjcmVhdGVfdGltZT0xNTk3MzA2NzAxJm5vbmNlPTAuNTMxMTQwNDU1OTE3OTAyMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk3MzI4MzAxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

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
