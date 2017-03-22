import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html\
  <a	routerLink="/component-one">Component	One</a>',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
