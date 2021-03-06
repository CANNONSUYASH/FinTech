import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  user$ :  Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { 
      
    this.user$ = afAuth.authState;


  }

  login(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logOut(){

    this.afAuth.signOut();
    console.log("LogOut")
  }


}
