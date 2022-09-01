import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SimpleStyleDirective} from '../simple-style/simple-style.directive';
import { Server2Component } from './server2/server2.component';
import { FormsModule } from '@angular/forms';
//import { ServerComponent } from './server2/server2.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleStyleDirective,
    Server2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
