import { Component } from '@angular/core';
export class PlayingCard {
  cardVal:string;
  suit: string;
}
@Component({
  selector: 'my-app',
  template:
      `
<section>
<form  #myForm="ngForm"> 
    <!--explain ngForm in terms of does it know when each 'name' is valid -->
        Name:
        <input type="text" pattern="[a-zA-Z ]*" minlength="3" required
         [(ngModel)]="myName" name="firstName" #firstName="ngModel" > 
        
        <div [hidden]="firstName.valid || firstName.pristine"> This control is invalid.</div> 
        
        <p *ngIf="firstName?.errors?.required && !anything.untouched">This field is required.</p>
        
        <p *ngIf="firstName?.errors?.pattern"> Only alphabetical characters are allowed.</p>
        <p *ngIf="firstName?.errors?.minlength"> This entry must have at least three characters.</p>  
         <br/>
         
         Last name:
         <input type="text" pattern="" minlength="1" required
         [(ngModel)]="lastName" name="anything" #anything="ngModel"/>
         
         <div [hidden]= "anything.valid || anything.pristine" > The control is invalid:  </div>
         <!--The valid form option displays whenever their is a incorrect input-->
         <p *ngIf="anything?.errors?.required && !anything.untouched"> this last Name is required </p>
         <!--The required input shows when their has been something touched and its not correct seems like required is used when its touched and blank -->
         <p *ngIf="anything?.errors?.minlength && !anything.untouched"> Their must be at least two chars</p>
         <p *ngIf="anything?.errors?.pattern"> Their cannot be any numbers</p> 
         
      <button type="submit" class="btn btn-default" 
       (click)="fun()">Submit</button>
       (disabled)
    </form>
</section>

`
})
export class AppComponent {
  myName: number;
  lastName:string;

  constructor(){
    this.lastName="";
  }
  fun(){
    console.log(typeof this.lastName);
    this.myName = parseInt(this.lastName,0);
    return this.myName+4;
  }
}


// export class AppComponentsa  {
//   public title = "this is angular";
//
//   public card: PlayingCard = {
//     cardVal: "Ace",
//     suit   : "Spades"
//   }
//   public yoda = false;
//
//   public cardss = CARDS;
//
//   test1 = [
//     {"name":"jap", "Gender":"Male"},
//     {"name":"Avneet", "Gender":"Female"},
//     {"name":"Pinku", "Gender":"Male"}
//     ]
//
//   firstFunction()  {
//     this.yoda = !this.yoda;
//   }
//
// }

var CARDS: PlayingCard[] = [
  { cardVal:"Ace", suit:"Spades"},
  { cardVal:"Two", suit:"Clubs" },
  { cardVal:"Six", suit:"Hearts"},
];



// Define card data.
var CARDS: PlayingCard[] = [
  { cardVal: "Ace", suit: "Spades" },
  { cardVal: "Two", suit: "Clubs" },
  { cardVal: "Six", suit: "Hearts" },
];
