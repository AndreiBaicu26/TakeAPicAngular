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
    '1_MX40Njg4MzY3NH5-MTU5NzczNDkyMDMyNX5BNllLeGVOdFozVVh5ZkZ3TWhBcVVyQ1N-fg';
  private token =
    'T1==cGFydG5lcl9pZD00Njg4MzY3NCZzaWc9MjNlMThjNzIyNDViNjJhMDhkNzZlODAxYzNmYmYyYzcxMmQzNTViYTpzZXNzaW9uX2lkPTFfTVg0ME5qZzRNelkzTkg1LU1UVTVOemN6TkRreU1ETXlOWDVCTmxsTGVHVk9kRm96VlZoNVprWjNUV2hCY1ZWeVExTi1mZyZjcmVhdGVfdGltZT0xNTk3NzM0OTI4Jm5vbmNlPTAuOTM0NjI5NTU1MDUzODMzMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk3NzU2NTI5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
  public publisherObs = new Subject<any>();
  public subscriberObs = new Subject<any>();
  private session: OT.Session;
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
  }

  public closeSession() {
    this.session.disconnect();
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
}
