import { Component, OnInit } from '@angular/core';
import { User } from './Models/User.model';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html'
})
export class Demo7Component implements OnInit {

  public statusAuth : boolean
  public statusAuth2 : boolean
  public liste1 : {}
  public liste2 : string[] = []

  public user : {
    name : string,
    surname : string,
    age : number
  } = { name : null, surname : null, age : null}

  public users : User[] = []

  constructor() {
    this.user.surname = "Loic"
    this.user.name = "Baudoux"
    this.user.age = 30


    let user1 = new User
    user1.name = "Amira"
    user1.surname = "Tata"
    user1.age = 99
    user1.techFav = ["Html", "Css", "js", "photoshop.."]

    let user2 = new User
    user2.name = "Stef"
    user2.surname = "Tutu"
    user2.age = 98
    user2.techFav = ["c#", "c", "c++", "discord"]

    this.users.push(user1)
    this.users.push(user2)
  }

  ngOnInit(): void {
    this.statusAuth = false
    this.statusAuth2 = false

    this.liste1 = {
      "name" : "Baudoux",
      "surname" : "Loic",
      "age" : 30,
    }

    this.liste2 = [
      "pomme", "poire", "banane", "orange"
    ]

    /* après key value */
    /*
    this.liste3 = [
      { key : "0", value : "pomme"},
      { key : "1", value : "poire"},
      { key : "2", value : "banane"},
      { key : "3", value : "orange"}
    ]*/
  }

  login()
  {
    this.statusAuth = !this.statusAuth
    this.statusAuth2 = !this.statusAuth2
  }

}


