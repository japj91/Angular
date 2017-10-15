import { Component } from '@angular/core';
import { PhoneConversion } from './app.phonePipe';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
            <form #ngform="ngForm">
            
            Enter number to be converted: 
            <input type="text" maxlength="10"
             [(ngModel)] ="userName" name="phoneInput" #phoneInput="ngModel"/>
            <!--comment above line out for exmaple-->
            </form>
            <p *ngIf="userName">{{userName | phoneConversion }}</p>`
})
export class AppComponent  {
    public name = 'Angular';
    public userName: number; // if i change this to number why doenst it work. Doesnt transfrom take what i ahve and change it
    public celsius: number;
    public farenhit:number;
    public names:Array<any>;

    constructor(){
        this.celsius = 33;
        // this.userName = 6043331111; un comment this line
    }
}
