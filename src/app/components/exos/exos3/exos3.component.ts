import { Component, OnInit } from '@angular/core';
import { Article } from './Article.model';

@Component({
  selector: 'app-exos3',
  templateUrl: './exos3.component.html'
})
export class Exos3Component implements OnInit {

  public newArticle : Article = new Article
  public listArticle : Article[] = []
  public totalHtva : number
  public totalTvac : number

  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    /*
    let tmp = new Article
    tmp.name = this.newArticle.name
    tmp.qty = this.newArticle.qty
    tmp.uPrice = this.newArticle.uPrice

    tmp = {...this.newArticle}

    let tmp2 = {
      var1  :"mavar1",
      var2  :"mavar2",
      var3  :"mavar3",
      var4  :"mavar4",
    }

    let {var1, var3, var4} = tmp2
    console.log(var1)
    console.log(var3)
    console.log(var4)

    tmp2.var1 = "Tatatat"

    console.log(var1)
    console.log(var3)
    console.log(var4)
*/

    this.listArticle.push( {...this.newArticle} )
    this.reCalculateTaxe()
  
  }

  reCalculateTaxe()
  {
    this.totalHtva = 0
    this.totalTvac = 0
    let tot : number = 0

    this.listArticle.forEach((item) => {
      tot += item.qty * item.uPrice
    })

    this.totalHtva += tot
    this.totalTvac += tot * 1.21
  }

  deleteA(data : Article)
  {
    //let index = this.listArticle.findIndex(item => item.name == data.name)
    /*let index = this.listArticle.findIndex(function(item) {
      if(item == data)
      {
        return true
      }
    })*/
    let index = this.listArticle.findIndex(item => item == data)

    this.listArticle.splice(index,1)
    this.reCalculateTaxe()
  }

}

