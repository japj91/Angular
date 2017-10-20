import { Component } from '@angular/core';
import {  MyremoteserviceService } from './myremoteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [MyremoteserviceService],
  styleUrls: ['app.component.css']
})
export class AppComponent {}
