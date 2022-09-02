import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<p>Server with ID {{serverID}} is {{serverStatus}}. </p>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'playground';
  firstName = "Aneta";
  lastName = "Stankovska";
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
}


// export class ServerClass{  
//   serverID: number = 10;  
//   serverStatus: string = 'Online';  
// }  
