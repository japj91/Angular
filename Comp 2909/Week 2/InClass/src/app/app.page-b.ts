import { Component } from '@angular/core';
@Component({
    template: `This is page b. 
    <input type="input"  (ngModelChange)="mychange($event)" [ngModel]="mymodel">
    <br>
    Second Input<input type="input"  (ngModelChange)="saveInfo($event)" [ngModel]="model">
    `
})
export class PageBComponent {
    constructor() {

    }
    mychange(val:string) {
        sessionStorage.setItem("autosave", val);
        console.log(val); // updated value
    }
    saveInfo(data:string){
       var a =  sessionStorage.setItem("value",data);
        console.log(a);
    }

}