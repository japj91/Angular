import { Component, Input } from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'second-directive',
    template: `<h3>This is the second directive!</h3>{{lastName}}
               
               <test3 [fullName]="value" ></test3>
               Input for third Directive: <input [(ngModel)]="value">`
})
export class NewDirective {
    @Input()
    public lastName:string;

}
