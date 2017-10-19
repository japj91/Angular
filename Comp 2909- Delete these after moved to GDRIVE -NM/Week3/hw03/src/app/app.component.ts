import { Component } from '@angular/core';
import {  MyremoteserviceService } from './myremoteservice.service';

@Component({
  selector: 'app-root',
  template:` 
                
                <!-- Submit feedback -->
                Email: <input [(ngModel)]="emailAddress"><br/>
                Feedback:  <input [(ngModel)]="feedbackMsg">
                <button (click)="postFeedback()">Submit Feedback</button>

                <!-- Show result from Post -->
                <div *ngIf="feedbackResponseMsg">{{feedbackResponseMsg}}<br/>
               {{feedbackResponseStatus}}</div>
               <br/>
               <button (click)="convertToF()">Get Fahrenheit</button><br/>
               <button (click)="convertToC()">Get Celsius</button><br/>
                `,
  // Providers allow us to inject an object instance through the constructor.
  providers: [MyremoteserviceService]
})
export class AppComponent {
  names: Array<any>;
  remoteService: MyremoteserviceService;
  emailAddress: string;
  feedbackMsg: string;
  feedbackResponseMsg: string;
  feedbackResponseStatus: string;

  constructor(_remoteService: MyremoteserviceService) {
    this.remoteService = _remoteService;
  }

  postFeedback(){

  }

  convertToC(){

  }

  convertToF(){
    this.remoteService.getFahrenheit()
    // Subscribe to observable.
      .subscribe(
        // Success.
        data => {
          this.names = data
          console.log(JSON.stringify(data))
          let x = data["Fahrenheit"];
          let y = 0;
        },
        // Error.
        error => {
          alert(error)
          console.log("error");
        },
        // Final Instructions.
        () => {
          console.log("Finished")
        });
  }
}
