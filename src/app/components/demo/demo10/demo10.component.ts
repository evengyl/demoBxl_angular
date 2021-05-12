import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html'
})
export class Demo10Component implements OnInit {

  public statusAuth : boolean

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.statusAuth =  this.loginService.statusAuthOnMyService
  }

  login()
  {
    this.loginService.loginService()
    this.statusAuth =  this.loginService.statusAuthOnMyService
  }

}
