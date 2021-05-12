import { Component, OnInit } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-exos2',
  templateUrl: './exos2.component.html'
})
export class Exos2Component implements OnInit {

  public varTime : number
  constructor(private timeS : TimeService) {
    
  }

  ngOnInit(): void {
    this.varTime = this.timeS.varTime
  }

  maj()
  {
    this.timeS.varTime = this.varTime
  }

}
