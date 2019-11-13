import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AdminService} from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(

  private adminService: AdminService

) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.adminService.continue) { alert('No tiene acceso'); }

    return this.adminService.continue;
  }

}
