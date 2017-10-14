import { Component } from '@angular/core';

@Component({
    selector:"my-apps",
    template: ` Angular Calculator
               <br/>
               <br>
               <add [operator]="sym" [type]="add">   </add>
               <add [operator]="minus" [type]="subtract"> </add>
               <add [operator]="multiply" [type]="product"> </add>
               <add [operator]="divide" [type]="Quotient"> </add>
                `
})

export class calculator{
    public sym = "+";
    public add = "Sum";
    public minus = "-";
    public subtract = "Difference"
    public multiply = "*";
    public product = "Product";
    public divide = "/";
    public Quotient = "Quotient";

}