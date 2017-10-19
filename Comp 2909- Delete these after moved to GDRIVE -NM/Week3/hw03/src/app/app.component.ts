import { Component } from '@angular/core';
import {  MyremoteserviceService } from './myremoteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names: Array<any>;
  remoteService: MyremoteserviceService;
  emailAddress: string;
  feedbackMsg: string;
  feedbackResponseMsg: string;
  feedbackResponseStatus: string;

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
