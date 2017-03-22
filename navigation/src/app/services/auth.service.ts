import { Injectable } from "@angular/core";
import { User } from '../user.interface';
import { Router } from "@angular/router";
// import { Router } from "@angular/router";
// Our firebase variable from index.html,..... yes we are using JavaScript Firebase code
declare var firebase: any;
@Injectable()

export class AuthService {
  constructor(private router: Router) {}
  signupUser(user: User) {
    // console.log("hiiiiiiiiiiii");
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }
}
