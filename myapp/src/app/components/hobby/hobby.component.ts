import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  @Input() hobbylist:any[]=[];
  @Output() deleteH=new EventEmitter();
  @Output() favH=new EventEmitter();
  constructor() { }
  delete(data:any){
    this.deleteH.emit(data);
  }
  fav(data:any){
this.favH.emit(data);
  }
  ngOnInit(): void {
  }

}
