import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ServiciosService } from '../services/servicios.service';


declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product = {
    price: this.serv.getPrice(),
    description: 'Mejor viaje de tu vida'
  };
  private documento: AngularFirestoreCollection<any>;
  constructor( private firestore: AngularFirestore, private serv: ServiciosService) {}
  paidFor = false;
  ourForm: FormGroup;

  submitting = false;
  submitted = false;

  ngOnInit() {
    this.documento = this.firestore.collection('correos');
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          this.submitData();
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
      
  }

  submitData(){
    this.documento.add(this.serv.getOrden());

  }
}
