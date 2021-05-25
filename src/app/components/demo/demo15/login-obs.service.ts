import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginObsService {

  public status : boolean = false
  public message : string = "Bonjour"

  public status$ : Subject<boolean> = new Subject<boolean>()
  public message$ : BehaviorSubject<string> = new BehaviorSubject<string>(this.message)

  constructor() { }

  emitStatus()
  {
    this.status$.next(this.status)
  }

  emitMessage()
  {
    this.message$.next(this.message)
  }

  login()
  {
    this.status = true
    this.emitStatus()
    this.message = "Bonjour, vous êtes bien loggé"
    this.emitMessage()
  }

  logout()
  {
    this.status = false
    this.emitStatus()
    this.message = "Au revoir ! à bientot"
    this.emitMessage()
  }
}
