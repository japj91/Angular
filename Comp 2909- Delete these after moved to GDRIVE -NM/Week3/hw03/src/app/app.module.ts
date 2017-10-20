import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ConversionComponent } from './conversion/conversion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConversionComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
