import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginObsService {

  public status : boolean = false
  public status$ : Subject<boolean> = new Subject<boolean>()
  
  public message : string = "Bonjour"
  public message$ : BehaviorSubject<string> = new BehaviorSubject<string>(this.message)

  constructor() { }

  private emitStatus()
  {
    this.status$.next(this.status)
  }


  private emitMessage()
  {
    this.message$.next(this.message)
  }

  public login()
  {
    this.status = true
    this.emitStatus()
    this.message = "Bonjour, vous êtes bien loggé"
    this.emitMessage()
  }

  public logout()
  {
    this.status = false
    this.emitStatus()
    this.message = "Au revoir ! à bientot"
    this.emitMessage()
  }
}
