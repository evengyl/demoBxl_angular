import { Component, OnInit } from '@angular/core';
import { LoginService } from '../demo10/login.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html'
})
export class Demo8Component implements OnInit {

  public persons = [
    {
      nom : "Camille de la haut provence",
      surnom : "Perseval le gaulois",
      dicton : "C'est pas faux",
      origin : "UK",
      lang : "prusse",
      color : "orange darken-4"
    },
    {
      nom : "Azadeh la grande malade",
      surnom : "Le maladie personnifiée",
      dicton : "C'est pas faux",
      origin : "IRAN",
      lang : "prusse",
      color : "orange"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getClass(origin : string)
  {
    switch(origin)
    {
      case 'UK' :
        return "brown darken-1"
      case 'IRAN' : 
        return "green accent-4"
      default :
        return "red"
    }
  }

  getStyle(origin : string)
  {
    switch(origin)
    {
      case 'UK' :
        return "red"
      case 'IRAN' : 
        return "blue"
      default :
        return "black"
    }
  }

}
