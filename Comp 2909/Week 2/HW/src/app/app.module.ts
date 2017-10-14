import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { food }           from './app.FoodItem';
import { details }        from './app.detail';
import {about }            from "./app.home";
import {topView}          from './app.homePage'


@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent,food,details, about,topView ],
  bootstrap: [AppComponent],
})
export class AppModule { }
