import { Component, OnInit } from '@angular/core';
import {MyremoteserviceService} from "../myremoteservice.service";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent  {

  names: Array<any>;
  remoteService: MyremoteserviceService;
  celsuis:string;
  celConverted:string;
  farenhit:string;
  farConverted:string;
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
          let x = Math.round(Number (data["Celsius"]));
          let y = 0;
          this.farConverted =String(x);
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
          let x = Math.round(Number (data["Fahrenheit"]));
          let y = 0;
          this.celConverted = String(x);
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
