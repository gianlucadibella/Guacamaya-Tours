import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  continue = new BehaviorSubject<boolean>(false);
  constructor() {   }

   getAdmin() {
    return this.continue.asObservable();
  }
   cambiar(newValue: boolean): void {
    this.continue.next(newValue);
  }
}
