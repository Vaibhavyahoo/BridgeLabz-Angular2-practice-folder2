import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// Our firebase variable from index.html,..... yes we are using JavaScript Firebase code
declare var firebase: any;
@Injectable()
export interface User{
  email:string;
  password:string;
}
export class AuthService {

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }
}
