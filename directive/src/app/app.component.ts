import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('document:keyup', ['$event'])
 onKeyUp(ev:KeyboardEvent) {
   // do something meaningful with it
   console.log(`The user just pressed ${ev.key}!`);
 }

 private switch = true;
 private items =[1, 2, 3, 4, 5]
 private value =100;
 
 onSwitch(){
   this.switch =!this.switch;
 }

}
