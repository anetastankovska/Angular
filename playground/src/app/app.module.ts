import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SimpleStyleDirective} from '../simple-style/simple-style.directive';
import { Server2Component } from './server2/server2.component';
import { FormsModule } from '@angular/forms';
//import { ServerComponent } from './server2/server2.component';
import { SqrtPipe } from './app.sqrt';  
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    SimpleStyleDirective,
    Server2Component,
    NameEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //NgModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
