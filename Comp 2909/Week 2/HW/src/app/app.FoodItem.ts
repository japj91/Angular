import { Component } from '@angular/core';

export class FoodItem {
    id:number;
    name:string;
    mfg:string;
    pkg:string;
    qty:number;
}

@Component({
    selector:"HW2",
    templateUrl:"./home.html"
})

export class food {
    public fooditems = FOODITEMS;
    items: FoodItem[];
    selectedWorkout:string;

    constructor(){
        // During first load store array in session.
        // Every consecutive load read from the session and not the array.
        if (sessionStorage.getItem("key") == null){
            sessionStorage.setItem("key", JSON.stringify(this.fooditems));
        }
         this.items = JSON.parse(sessionStorage.getItem("key"));
    }

}

var FOODITEMS: FoodItem[] = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
    ];
