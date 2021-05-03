import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exos1',
  templateUrl: './exos1.component.html'
})
export class Exos1Component implements OnInit {
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

  public var1 : number
  public var2 : number
  public tot : number
  public save : number[] = []
  public lastElem : number

  constructor() {
    this.var1 = 1
    this.var2 = 1
    this.tot = 0
  }

  ngOnInit(): void {
    this.lastElem = this.tot
  }


  calcul()
  {
    this.tot = this.var1 + this.var2
    this.var2 = this.var1
    this.var1 = this.tot

    this.save.push(this.tot)
  }


  viewSave()
  {
    this.lastElem = this.save[this.save.length-1]
  }

}
