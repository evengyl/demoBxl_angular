import { Component, OnInit } from '@angular/core';
import { PromiseService } from './services/promise.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html'
})
export class Demo11Component implements OnInit {

  constructor(public ps : PromiseService) { }

  ngOnInit(): void {
  }

  changeStatus()
  {
    this.ps.status = !this.ps.status
  }

  
  pSimple1()
  {
    this.ps.pSimple1()
  }

  pSimple2()
  {
    this.ps.pSimple2()
  }

  pSimple3()
  {
    let myReturn = this.ps.pSimple3()

    myReturn.then((user : any) => {
      this.ps.message = `Super j'ai résolu ma promesse, bonjour ${user.name}`
    })

    myReturn.catch((error) => {
      this.ps.message = `Hoops j'ai Raté ma promesse avec le message : ${error.message}`
    })
  }

  pAll()
  {
    this.ps.pAll()
  }

  pRace()
  {
    this.ps.pRace()
  }

}
