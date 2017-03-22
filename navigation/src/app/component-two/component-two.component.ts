import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { AuthService} from '../services/auth.service';
@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  myForm: FormGroup;
  genders=
    [
      'male',
      'female'
    ]

    ngOnInit() {
      this.myForm = new FormGroup({
        'username': new FormControl('', [Validators.required, Validators.minLength(2)]),
        'email': new FormControl('', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password':new FormControl('', Validators.required),
      'gender': new FormControl('')

    });
  }
}
//    constructor(private auth:AuthService){ }
//
//   onSubmit(){
//     this.auth.signupUser(this.myForm.value);
//     console.log(this.myForm.value);
//     // this.auth.signupUser(this.myForm.value);
//   }
// }
