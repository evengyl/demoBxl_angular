import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciPrivateService {

  public var1 : number = 1
  public var2 : number = 0
  public tot : number = 1
  private save : number[] = []
  public lastElem : number = 0

/*
  1
  1
  1 + 1 = 2
  1 + 2 = 3
  2 + 3 = 5
  3 + 5 = 8
  5 + 8 = 13
  8 + 13 = 21

  var1
  var1 + var2 = tot
*/
  constructor() { }

  calculP()
  {
    this.var2 = this.var1
    this.var1 = this.tot
    this.tot = this.var1 + this.var2

    this.save.push(this.tot)
  }

  viewSaveP()
  {
    this.lastElem = this.save[this.save.length-1]
  }
}
