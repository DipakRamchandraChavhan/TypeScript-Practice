import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-addhobby',
  templateUrl: './addhobby.component.html',
  styleUrls: ['./addhobby.component.css']
})
export class AddhobbyComponent {
  @Output() addhobbyevent=new EventEmitter();
  constructor() { }

  addH($event:any){
    let data=$event.target.value;
    $event.target.value="";
    this.addhobbyevent.emit(data);
  }

}
