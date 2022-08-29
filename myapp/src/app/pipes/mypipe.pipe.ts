import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string){
   let val1=value.slice(0,3);
   let val2=value.slice(3,6);
   let val3=value.slice(6);
    return "("+val1+") "+val2+"-"+val3;
  }
  // transform(value: string,limit?:number) {

  //   if(value)
  //   {
  //     let txt:string;
  //     txt = value;
  //     let num = limit?limit:3;

  //     txt = value.substring(0,num);
  //     if (value.length>num){
  //       txt = txt + '...readonly';
  //       return txt;
      
  //     }
  //     return txt;
  //   }
  //   return null;
    
  // }
}
