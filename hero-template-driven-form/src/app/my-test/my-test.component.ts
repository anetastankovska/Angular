import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {

  names :string[] = [];
  name :string = '';
  backgroundColor = "red"
  testVar :any 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Clicked!");
    this.names.push(this.name);
    console.log("This.name " + this.name);
    console.log("This.names " + this.names);
  }

  onLog(event: Event){
    this.testVar = event.target;
    console.log(this.testVar);
  }

}
