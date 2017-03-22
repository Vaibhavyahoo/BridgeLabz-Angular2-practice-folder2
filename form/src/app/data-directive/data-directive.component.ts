import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-data-directive',
  templateUrl: './data-directive.component.html',
  styleUrls: ['./data-directive.component.css']
})
export class DataDirectiveComponent  {
myForm: FormGroup;
genders=
  [
    'male',
    'female'
  ]

  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'email': new FormControl('', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    'password':new FormControl('', Validators.required),
    'gender': new FormControl('')

  });
}
onSubmit(){
  console.log(this.myForm);
}
}
