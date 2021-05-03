import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

  public varTxt : string 
  public varNb : number
  public varDate : Date

  constructor() {
    this.varTxt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, eaque!"
    this.varNb = 10.001514964513
    this.varDate = new Date()
  }

  ngOnInit(): void {
  }

}
