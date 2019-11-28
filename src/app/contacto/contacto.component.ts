import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  private submissionForm: AngularFirestoreCollection<any>;
  title = 'Guacamaya-Tours';
  admin = false;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore) { }

  ourForm: FormGroup;

  submitting = false;
  submitted = false;

  ngOnInit(): void {

    this.submissionForm = this.firestore.collection('submissions');
    this.ourForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      orderStatus: ['', Validators.required],
      contactNumber: ['', [Validators.required]],
      reserveCode: [''],
      feedback: ['', Validators.required]
    });
  }

  orderStatusChanged(val: string) {
    console.log(val);

    const reserveControl = this.ourForm.get('reserveCode');

    if (val === 'Android') {
      reserveControl.setValidators([Validators.required]);
    } else {
      reserveControl.clearValidators();
    }
    reserveControl.updateValueAndValidity();
  }




  submitData(value: any) {
    console.log(this.submitted);

    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
    ).finally(() => {
      this.submitting = false;
    });

  }

}
