import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GuardLoginService } from './guard-login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private s : GuardLoginService, private router : Router){}

  canActivate(): boolean
  {

    if(this.s.status)
      return true
    else
      this.router.navigate(['/'])
  }
}
