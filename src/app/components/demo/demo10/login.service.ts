import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public statusAuthOnMyService = false

  constructor() { }

  loginService()
  {
    this.statusAuthOnMyService = !this.statusAuthOnMyService
  }
}
