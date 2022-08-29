import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
@Output() unf=new EventEmitter();
@Input() hobbylist:any[]=[];
  constructor() { }
  unfav(data:any){
    this.unf.emit(data);
  }
  ngOnInit(): void {
  }

}
