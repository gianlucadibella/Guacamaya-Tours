import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServicioService } from './servicio.service';
import { AdminService } from './services/admin.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as firebase from 'firebase/app';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
// import * as validUrl from 'valid-url';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  private submissionForm: AngularFirestoreCollection<any>;
  title = 'Guacamaya-Tours';
  admin = false;
  //  public afAuth: AngularFireAuth, private fun: AngularFireFunctions
  constructor(private ser: ServicioService, private s: AdminService) {
    this.s.getAdmin().subscribe(value => {console.log(value);
                                          this.admin = value;
    });
  }
  //   loginWithGoogle() {
  //     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //   }

  //  sendEmail() {
  //     const callable = this.fun.httpsCallable('genericEmail');
  //     callable({ text: 'Sending email with Angular and SendGrid is fun!', subject: 'Email from Angular'}).subscribe();
  //   }

}
