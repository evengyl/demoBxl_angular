import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exos2',
  templateUrl: './exos2.component.html'
})
export class Exos2Component implements OnInit {

  public varTime : number
  constructor() {
    this.varTime = 62587
  }

  ngOnInit(): void {
  }

}
