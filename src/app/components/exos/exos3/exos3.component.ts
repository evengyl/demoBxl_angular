import { Component, OnInit } from '@angular/core';
import { Article } from './Article.model';
import { CardService } from './card.service';

@Component({
  selector: 'app-exos3',
  templateUrl: './exos3.component.html'
})
export class Exos3Component implements OnInit {

  public newArticle : Article = new Article
  public listArticleCompo : Article[] = []
  public totalHtva : number
  public totalTvac : number

  constructor(private cardS : CardService) { }

  ngOnInit(): void {
  }


  add()
  {
    this.cardS.add({...this.newArticle})
    this.listArticleCompo = this.cardS.listArticle
    this.totalHtva = this.cardS.totalHtva
    this.totalTvac = this.cardS.totalTvac
  }

  deleteA(data : Article)
  {
    this.cardS.deleteA({...data})
    this.listArticleCompo = this.cardS.listArticle
    this.totalHtva = this.cardS.totalHtva
    this.totalTvac = this.cardS.totalTvac
  }
}

