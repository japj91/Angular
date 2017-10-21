import { Component } from '@angular/core';
import {MyremoteserviceService} from "../myremoteservice.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  emailAddress: string;
  feedbackMsg: string;
  remoteService: MyremoteserviceService;
  response:Array<any>;
  userResponse:string;

  constructor(_remoteService: MyremoteserviceService) {
    this.remoteService = _remoteService;
  }

  postFeedback(myForm:FormGroup) {

    if (myForm.valid) {
      let feedback = {
        Email:this.emailAddress,
        Message: this.feedbackMsg
      }

      this.remoteService.postName(feedback)
        .subscribe(
          validData =>{
            console.log(validData);
            this.response = validData;
            this.userResponse = this.response["Message"];

          },
          error2 => {
            console.log(error2);
            alert(error2);
          },
          () =>{
            console.log("finally")
            myForm.reset();
          }
        )

    }
  }
}
