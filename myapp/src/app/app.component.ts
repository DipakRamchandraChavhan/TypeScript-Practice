import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hobbies';
  lnk:string="";
  val1:any;
  hobiies=[{name:"swim",time:"10",val:0},{name:"Badminton",time:"20",val:0}];

  setH(data:string){
    this.lnk=data;
  }
  addHobby(hobby:any){
    let h={name:hobby,time:"10",val:0};
    this.hobiies.unshift(h);
    h.name;
  }
  deleteH($event:any){
    this.hobiies.splice($event,1);
  }
  favH($event:any){
    let a=this.hobiies[$event];
    a.val=1;
    this.hobiies[$event]=a;
  }
  unfav($event:any){
    this.hobiies[$event].val=0;
  }
}
