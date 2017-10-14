import {Component} from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit: string;
}

@Component({
    selector: "my-apps",
    template: `<h1>Hello world!  {{title}} </h1> <br/>
<!-- Show cards in unordered list. -->
<ul><li *ngFor="let card of cards" (click)="onSelect(card)">
<!--// Usually a for loop only iterates once it seems to be infinitly looping or is the data changing? The data must be changing-->
    {{card.cardVal}}</li>
</ul>

<div *ngIf="selectedCard">
    <h2>{{selectedCard.cardVal}} **</h2>
<input [(ngModel)]="selectedCard.cardVal" placeholder="name"/>
    </div>
    `
})

export class AppComponents {
    public title = "this is angular 4";

    public cards = CARDS;

    selectedCard: PlayingCard;

    onSelect(card:PlayingCard){
        this.selectedCard = card;
        alert("Hello World")
    }
}
var CARDS: PlayingCard[] = [
    {cardVal:"ace", suit:"Spades"},
    {cardVal:"Two", suit:"Clubs"},
    {cardVal:"Six", suit:"Hearts"}
]