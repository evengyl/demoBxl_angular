import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeServeService {

  public base : string = "https://pokeapi.co/api/v2/"

  constructor(private _http : HttpClient){}

  getPkn()
  {
    return this._http.get<any[]>(this.base + "pokemon")
  }

  get(url : string)
  {
    return this._http.get<any[]>(url)
  }


  fakePost()
  {
    let datas = {
      name : "Loic",
      login : "evengyl"
    }
    return this._http.post("http://urlDapi/post/user/", datas)
  }
}
