import { Component, OnInit, Input, Inject } from '@angular/core';  
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
  
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
  
@Component({  
  selector: 'app-server2',  
  templateUrl: './server2.component.html',  
  styleUrls: ['./server2.component.css']  
}) 

export class Server2Component implements OnInit {  
  testProperty = "Test";
  allowNewServer = false;  
  serverCreationStatus= 'No Server is created.'; 
  names = ["Server1", "Server2", "Server3", "Server4", "Server5"]; 
  colors = ["Red", "Blue", "Black", "Green", "Pink"];
  testObjects = {person: {
    firstName : "Aneta",
    lastName: "Stankovska",
    age: 31,
    favoriteColors : ["Black", "White"]
  }}
   constructor() {  
     setTimeout(() =>{  
       this.allowNewServer = true;  
     }, 5000);  
   }  
   
   ngOnInit() {  
   } 
   
    
   }
   
   
 
