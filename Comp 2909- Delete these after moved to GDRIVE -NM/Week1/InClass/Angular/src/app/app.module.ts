import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { addition }         from './app.add';
import { subtract }         from './app.minus';
import { calculator}     from './app.holder';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ calculator,addition,subtract],
  bootstrap:    [ calculator]
})
export class AppModule {}
