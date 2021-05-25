import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginService {

  public status : boolean = false
  constructor() { }


  login() : boolean
  {
    this.status = true
    return this.status
  }

  logout() : boolean
  {
    this.status = false
    return this.status
  }
}
