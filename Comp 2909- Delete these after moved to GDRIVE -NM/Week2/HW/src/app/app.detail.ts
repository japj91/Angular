import { Component } from '@angular/core';
import {FoodItem} from "./app.FoodItem";
import { ActivatedRoute, Params }       from '@angular/router';


@Component({
    selector:'hello',
    templateUrl:'./detail.html'
})

export class details {
    arr: FoodItem[];
    id:string;
    selectedItem:FoodItem;
    item:FoodItem;


    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
             let num = params["id"];
             this.id = num;

            this.arr = JSON.parse(sessionStorage.getItem("key"));

            this.arr.forEach (function (item) {
                if(item.id == Number(num)){
                    let foodItem = item;
                    this.selectedItem  = foodItem;
                }
            },this)
        })
    }

}