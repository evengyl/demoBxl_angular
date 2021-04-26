import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements OnInit {
  
  nbTotal : number

  constructor() {
    this.nbTotal = 0
  }

  ngOnInit(): void {
  }

  add(increment : number){
    this.nbTotal += increment
  }

  removeOne(){
    this.nbTotal -= 1
  }

  resetNb(){
    this.nbTotal = 0
  }

}
