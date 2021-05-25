import { Component, OnInit } from '@angular/core';
import { GuardLoginService } from './guard-login.service';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html'
})
export class Demo14Component implements OnInit {

  public status : boolean
  constructor(private s : GuardLoginService) { }

  ngOnInit(): void {
    this.status = this.s.status
  }

  login()
  {
    this.status = this.s.login()
  }

  logout()
  {
    this.status = this.s.logout()
  }

}
