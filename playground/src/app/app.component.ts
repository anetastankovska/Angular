import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //template: `<p>Server with ID {{serverID}} is {{serverStatus}}. </p>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'playground';
}

export class ServerComponent{  
  serverID: number = 10;  
  serverStatus: string = 'Online';  
}  