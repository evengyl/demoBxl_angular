import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public varTime : number = 62587

  constructor() {
    console.log(this.varTime)
  }
}
