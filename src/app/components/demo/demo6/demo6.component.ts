import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html'
})
export class Demo6Component implements OnInit {

  public var1 : number
  public varPow : number
  
  
  constructor() {
    this.var1 = 42
    this.varPow = 1
  }

  ngOnInit(): void {
  }

  camille()
  {
    this.varPow +=1
  }

}
