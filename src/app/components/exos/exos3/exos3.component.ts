import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exos3',
  templateUrl: './exos3.component.html'
})
export class Exos3Component implements OnInit {

  public newArticle : Article = new Article
  public listArticle : Article[] = []

  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    this.listArticle.push({...this.newArticle})//on dosi créer une copie car on travail par référence sur un object !
  }

  deleteA(data : any)
  {
    let index = this.listArticle.findIndex(item =>  item.name == data.name)
    this.listArticle.splice(index,1)
    
  }

}

export class Article
{
  public name : string
  public qty : string
  public uPrice : string
}