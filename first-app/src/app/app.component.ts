import { Component } from '@angular/core';

@Component({
  selector: '[myClass]',
  template: `<img [src]="imageUrl">
  <img [src]="imageUrl" (click)='myMethod()'>
  <h1>Inline Template</h1>
  <app-other></app-other>
  <app-another></app-another>
<app-anotheer></app-anotheer>
<app-data-binding></app-data-binding>
<app-property-binding></app-property-binding>



  `,
  styles: [`
    h1{
      color:red;
    }`],
})
export class AppComponent {
  title = 'Does this work';
  imageUrl = 'https://angular.io/resources/images/logos/angular2/angular.png';
  myMethod(){
    console.log("hey thank for click")
  }
}
