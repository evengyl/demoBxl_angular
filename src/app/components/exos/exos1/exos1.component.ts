import { Component, OnInit } from '@angular/core';
import { FibonacciPrivateService } from './fibonacci-private.service';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-exos1',
  templateUrl: './exos1.component.html'
})
export class Exos1Component implements OnInit {

  constructor(public fiboService : FibonacciService, 
              private fiboServiceP : FibonacciPrivateService){}

              
              
  viewSave()
  {
    this.fiboService.viewSave()
  }
  
  calcul()
  {
    this.fiboService.calcul()
  }
  
  
  /*part private */
  public var1 : number = 0
  public var2 : number = 0
  public tot : number = 0
  public lastElem : number = 0

  ngOnInit(): void{
    this.var1 = this.fiboServiceP.var1
    this.var2 = this.fiboServiceP.var2
    this.tot = this.fiboServiceP.tot
    this.lastElem = this.fiboServiceP.lastElem
  }
              
  viewSaveP()
  {
    this.fiboServiceP.viewSaveP()
    this.lastElem = this.fiboServiceP.lastElem
  }

  calculP()
  {
    this.fiboServiceP.calculP()
    this.var1 = this.fiboServiceP.var1
    this.var2 = this.fiboServiceP.var2
    this.tot = this.fiboServiceP.tot
  }
}
