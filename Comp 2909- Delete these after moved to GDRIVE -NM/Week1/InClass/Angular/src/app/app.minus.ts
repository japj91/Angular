import { Component, Input } from '@angular/core';
import {FormGroup, Form} from "@angular/forms";

@Component({
    selector:"sub",
    templateUrl:"./addition.html"
})

export class subtract {
    public total:number;
    public var3:string;
    public var2:string;
    public operator = "-";

    calculate(){
        this.total = Number(this.var2) -  Number(this.var3);
    }

    rounded(){
        return Math.round(this.total * 100) / 100;
    }

    onSubmit(myForm:FormGroup){
        myForm.reset();
    }
}
