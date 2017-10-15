"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PlayingCard = (function () {
    function PlayingCard() {
    }
    return PlayingCard;
}());
exports.PlayingCard = PlayingCard;
var AppComponents = (function () {
    function AppComponents() {
        this.title = "this is angular 4";
        this.cards = CARDS;
    }
    AppComponents.prototype.onSelect = function (card) {
        this.selectedCard = card;
        alert("Hello World");
    };
    return AppComponents;
}());
AppComponents = __decorate([
    core_1.Component({
        selector: "my-apps",
        template: "<h1>Hello world!  {{title}} </h1> <br/>\n<!-- Show cards in unordered list. -->\n<ul><li *ngFor=\"let card of cards\" (click)=\"onSelect(card)\">\n<!--// Usually a for loop only iterates once it seems to be infinitly looping or is the data changing? The data must be changing-->\n    {{card.cardVal}}</li>\n</ul>\n\n<div *ngIf=\"selectedCard\">\n    <h2>{{selectedCard.cardVal}} **</h2>\n<input [(ngModel)]=\"selectedCard.cardVal\" placeholder=\"name\"/>\n    </div>\n    "
    })
], AppComponents);
exports.AppComponents = AppComponents;
var CARDS = [
    { cardVal: "ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" }
];
//# sourceMappingURL=app.something.js.map