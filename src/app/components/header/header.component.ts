import { Component, OnInit } from '@angular/core';
import { GuardLoginService } from '../demo/demo14/guard-login.service';
import { LoginObsService } from '../demo/demo15/login-obs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public status : boolean
  public message : string
  constructor(private s : LoginObsService) { }

  ngOnInit(): void {
    this.s.status$.subscribe(
      (toto) => {this.status = toto}
    )

    this.s.message$.subscribe(
      (message) => { this.message = message}
    )
  }

}
