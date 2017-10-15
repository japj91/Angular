import { Component,Input } from '@angular/core';

@Component({
    selector: 'test3',
    template: `<h2> This is the third directive {{fullName}}</h2>`
})

export class helloWorld{
    @Input()
    fullName:string;
}