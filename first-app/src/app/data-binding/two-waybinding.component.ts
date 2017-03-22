import { Component } from '@angular/core';

@Component({
  selector: 'app-two-waybinding',
  template: `
    <input type="text" [(ngModel)]="person.name">
     <input type="text" [(ngModel)]="person.name">
  `,

})
export class TwoWaybindingComponent {
person = {
  name:"vaibhav",
  age:24
};

}
