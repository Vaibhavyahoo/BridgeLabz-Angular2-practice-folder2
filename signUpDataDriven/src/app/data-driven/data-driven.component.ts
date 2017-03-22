import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { Signup } from 'app/signup';

@Component({
  selector: 'signup-form',
  templateUrl: './data-driven.component.html',
  // styles:[`
  //   .ng-invalid{
  //     border:1px solid red;
  //   }`
  // ]
})
export class SignupFormComponent implements OnInit {
  user: FormGroup;
  constructor() {}
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
        password: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit() {
    console.log(this.user);
  }
}
