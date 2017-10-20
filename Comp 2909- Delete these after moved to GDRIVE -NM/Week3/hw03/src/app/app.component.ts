import { Component } from '@angular/core';
import {  MyremoteserviceService } from './myremoteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [MyremoteserviceService],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  names: Array<any>;
  remoteService: MyremoteserviceService;
  emailAddress: string;
  feedbackMsg: string;
  celsuis:string;
  farenhit:string;
  feedbackResponseMsg: string;
  feedbackResponseStatus: string;

  constructor(_remoteService: MyremoteserviceService) {
    this.remoteService = _remoteService;
  }

  postFeedback(){

  }

  convertToC(temp:string){
    console.log(temp);
    this.remoteService.getCelsius(temp)
    // Subscribe to observable.
      .subscribe(
        // Success.
        data => {
          this.names = data
          console.log(JSON.stringify(data))
          let x = data["Celsius"];
          let y = 0;
          this.celsuis = x;
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

  convertToF(temp:string){
    console.log(temp);
    this.remoteService.getFahrenheit(temp)
    // Subscribe to observable.
      .subscribe(
        // Success.
        data => {
          this.names = data
          console.log(JSON.stringify(data))
          let x = data["Fahrenheit"];
          let y = 0;
          this.farenhit = x;
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
