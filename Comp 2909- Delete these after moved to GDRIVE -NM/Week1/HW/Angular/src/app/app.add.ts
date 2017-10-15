import { Component, Input } from '@angular/core';
import {FormGroup, Form} from "@angular/forms";

@Component({
    selector:"add",
    templateUrl:"./addition.html"
})

export class addition {
    public total:number;
    public var3:string;
    public var2:string;

    @Input()
    public operator:string;

    @Input()
    public type:string;

    calculate(){
        this.total = eval(Number(this.var2) +this.operator+  Number(this.var3));
    }

    rounded(){
        return Math.round(this.total * 100) / 100;
    }

    onSubmit(myForm:FormGroup){
        myForm.reset();
    }
}
