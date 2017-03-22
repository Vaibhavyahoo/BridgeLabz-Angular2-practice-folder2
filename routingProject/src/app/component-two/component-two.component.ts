import { Component, OnInit } from '@angular/core';
import	{	routing	}	from	'../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component-two',
  template: `
  <button (click)=onNavigate()>Go Home</button>
  `,
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
public message="sjdvfyusy"
  constructor(private router:Router) { }

  ngOnInit() {
  }
onNavigate(){
  this.router.navigate(['/']);
}
}
