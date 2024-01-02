import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Directive({
  selector: '[googleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')onClick (){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}

