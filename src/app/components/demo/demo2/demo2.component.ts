import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {

  public maVar1 : string
  public maVar2 : number
  public maVar3 : boolean
  
  constructor() {
    this.maVar1 = "Edouard"
    this.maVar2 = 3
    this.maVar3 = true
  }

  ngOnInit(): void {
  }

}
