import { Component, OnInit } from '@angular/core';
import { LoginObsService } from './login-obs.service';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html'
})
export class Demo15Component implements OnInit {

  public status : boolean
  public message : string
  constructor(private s : LoginObsService) { }

  ngOnInit(): void {
    this.s.status$.subscribe(
      (status) => { this.status = status}
    )

    this.s.message$.subscribe(
      (message) => {this.message = message}
    )
  }


  login()
  {
    this.s.login()
  }

  logout()
  {
    this.s.logout()
  }

}
