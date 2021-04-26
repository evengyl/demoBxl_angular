import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html'
})
export class Demo1Component implements OnInit
{
  public maVar1 : String
  public maVar2 : Number
  public maVar3 : Boolean

  constructor() {
    this.maVar1 = "Taratata"
    this.maVar2 = 25
    this.maVar3 = true
  }

  ngOnInit(): void {
  }

}
