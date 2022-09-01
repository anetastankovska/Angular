import { Component, OnInit } from '@angular/core';  
import { NgModule } from '@angular/core';
  
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
  
@Component({  
  selector: 'app-route',  
  templateUrl: './server2.component.html',  
  styleUrls: ['./server2.component.css']  
}) 

export class Server2Component implements OnInit {  
 allowNewServer = false;  
 serverCreationStatus = 'No server is created.';  
  serverName = 'TestServer';  
  serverCreated = false;  
  
  /*constructor() {  
    setTimeout(() =>{  
      this.allowNewServer = true;  
    }, 5000);  
  }*/  
  
  ngOnInit() {  
  }  
  onCreateServer() {  
    this.serverCreated = true;  
    this.serverCreationStatus = 'Server is created. Name of the server is' + this.serverName;  
  }  
  OnUpdateServerName(event: Event) {  
    this.serverName = (<HTMLInputElement>event.target).value;  
  }  
} 
 
