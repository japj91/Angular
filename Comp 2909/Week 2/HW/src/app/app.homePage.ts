/**
 * Created by japjohal on 2017-10-14.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'myHome',
    template: `
    <div>
    <div class="Home" routerLink="/page-a" routerLinkActive="active"> <a>Home</a></div>
    <div  class ="Home" routerLink="/about" routerLinkActive="active">  <a>About</a></div>
    </div>
    <!--Tips for routing set up page export that class import it in app.module and app.routing set paratmers-->
`
})
export class topView { }
