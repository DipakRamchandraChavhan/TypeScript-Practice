import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() msg="hobby";
  @Input() hobbies=[{name:"string",time:"string"}];
  @Output() addevent=new EventEmitter();
  @Output() deletH=new EventEmitter();
  @Output() faH=new EventEmitter();
  @Output() unf=new EventEmitter();
  no:string="";
  constructor() { }

  ngOnInit(): void {
  }
  favH($event:any){
    this.faH.emit($event);
  }
  unfav($event:any){
    this.unf.emit($event);
  }
  addhobby(data:string){
this.addevent.emit(data);
  }
  deleteH($event:any){
    this.deletH.emit($event);
  }
}
