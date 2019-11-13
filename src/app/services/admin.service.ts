import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

continue: boolean;
  constructor() {

    this.continue = false;

   }
}
