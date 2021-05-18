import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  public status : boolean = false
  public message : string = ""

  public user : any = {
    name : "tartempion",
    login : "tata",
    mdp : 2
  }
  constructor() { }

  pSimple1()
  {
    new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })
    .then((user : any) => {
      this.message = `Super j'ai résolu ma promesse, bonjour ${user.name}`
    })
    .catch((error) => {
      this.message = `Hoops j'ai Raté ma promesse avec le message : ${error.message}`
    })
  }

  pSimple2()
  {
    let myPromiseSimple2 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })

    let tutu = "ahaha"
    let a = 42
    let b = 12
    let c = a+b
    console.log(c)

    myPromiseSimple2.then((user : any) => {
      this.message = `Super j'ai résolu ma promesse, bonjour ${user.name}`
    })


    myPromiseSimple2.catch((error) => {
      this.message = `Hoops j'ai Raté ma promesse avec le message : ${error.message}`
    })
  }

  pSimple3()
  {
    return new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })
  }

  pAll()
  {
    let myPromiseAll1 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })

    let myPromiseAll2 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })

    let myPromiseAll3 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })


    Promise.all([myPromiseAll1, myPromiseAll2, myPromiseAll3])
    .then((user : any) => { this.message = `Super j'ai résolu ma promesse, bonjour ${user[0].name}` })
    .catch((error : any) => { this.message = `Hoops j'ai Raté ma promesse avec le message : ${error.message}` })
  }

  pRace()
  {
    let myPromiseRace1 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 2000)
      }
      else
      {
        setTimeout(() => {
          reject({message : "Promise 1 : La base de données n'as pas répondue... error 501"})
        }, 2000)
      }
    })

    let myPromiseRace2 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1500)
      }
      else
      {
        setTimeout(() => {
          reject({message : "Promise 2 : La base de données n'as pas répondue... error 501"})
        }, 1500)
      }
    })

    let myPromiseRace3 = new Promise((resolve, reject) =>
    {
      if(this.status)
      {
        setTimeout(() => {
          resolve(this.user)
        }, 1000)
      }
      else
      {
        setTimeout(() => {
          reject({message : "Promise 3 : La base de données n'as pas répondue... error 501"})
        }, 1000)
      }
    })


    Promise.race([myPromiseRace1, myPromiseRace2, myPromiseRace3])
    .then((user : any) => { this.message = `Super j'ai résolu ma promesse, bonjour ${user.name}` })
    .catch((error : any) => { this.message = `Hoops j'ai Raté ma promesse avec le message : ${error.message}` })
  }
}
