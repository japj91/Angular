import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <myHome></myHome>   
    <router-outlet></router-outlet> 
    <date></date>
    <!--Where the data is displayed from the router-->
`
})
export class AppComponent { }
