import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
    styleUrls:['data-binding.component.css']

})
export class DataBindingComponent{
stringInterPolation = "this is string interpolation";
numberInterPolation =15;
onMethod(){
  return true;
}
onClick(value:string){
  alert(value);
}
}
