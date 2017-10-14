import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule}         from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PhoneConversion } from './app.phonePipe';
import { PageDefault }    from './app.pagedefaults';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing }        from './app.routing';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,routing],
  declarations: [ AppComponent,PhoneConversion, PageBComponent,PageAComponent,PageDefault],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
