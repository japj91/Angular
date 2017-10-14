"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PlayingCard = (function () {
    function PlayingCard() {
    }
    return PlayingCard;
}());
exports.PlayingCard = PlayingCard;
var AppComponent = (function () {
    function AppComponent() {
        this.lastName = "";
    }
    AppComponent.prototype.fun = function () {
        console.log(typeof this.lastName);
        this.myName = parseInt(this.lastName, 0);
        return this.myName + 4;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<section>\n<form  #myForm=\"ngForm\"> \n    <!--explain ngForm in terms of does it know when each 'name' is valid -->\n        Name:\n        <input type=\"text\" pattern=\"[a-zA-Z ]*\" minlength=\"3\" required\n         [(ngModel)]=\"myName\" name=\"firstName\" #firstName=\"ngModel\" > \n        \n        <div [hidden]=\"firstName.valid || firstName.pristine\"> This control is invalid.</div> \n        \n        <p *ngIf=\"firstName?.errors?.required && !anything.untouched\">This field is required.</p>\n        \n        <p *ngIf=\"firstName?.errors?.pattern\"> Only alphabetical characters are allowed.</p>\n        <p *ngIf=\"firstName?.errors?.minlength\"> This entry must have at least three characters.</p>  \n         <br/>\n         \n         Last name:\n         <input type=\"text\" pattern=\"\" minlength=\"1\" required\n         [(ngModel)]=\"lastName\" name=\"anything\" #anything=\"ngModel\"/>\n         \n         <div [hidden]= \"anything.valid || anything.pristine\" > The control is invalid:  </div>\n         <!--The valid form option displays whenever their is a incorrect input-->\n         <p *ngIf=\"anything?.errors?.required && !anything.untouched\"> this last Name is required </p>\n         <!--The required input shows when their has been something touched and its not correct seems like required is used when its touched and blank -->\n         <p *ngIf=\"anything?.errors?.minlength && !anything.untouched\"> Their must be at least two chars</p>\n         <p *ngIf=\"anything?.errors?.pattern\"> Their cannot be any numbers</p> \n         \n      <button type=\"submit\" class=\"btn btn-default\" \n       (click)=\"fun()\">Submit</button>\n       (disabled)\n    </form>\n</section>\n\n"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
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
var CARDS = [
    { cardVal: "Ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" },
];
// Define card data.
var CARDS = [
    { cardVal: "Ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" },
];
//# sourceMappingURL=app.component.js.map