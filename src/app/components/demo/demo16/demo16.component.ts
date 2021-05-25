import { Component, OnInit } from '@angular/core';
import { PokeServeService } from './poke-serve.service';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html'
})
export class Demo16Component implements OnInit {

    public listPkn : any[] = []
    public numberTotal : number
    public urlPrev : string
    public urlNext : string

  constructor(private pokeS : PokeServeService) { }

  ngOnInit(): void {
    this.pokeS.getPkn().subscribe(
      (datas : any) => {
        this.syncDatas(datas)
      }
    )
  }


  prev()
  {
    this.pokeS.get(this.urlPrev).subscribe(
      (datas) => {
        this.syncDatas(datas)
      }
    )
  }

  next()
  {
    this.pokeS.get(this.urlNext).subscribe(
      (datas) => {
        this.syncDatas(datas)
      }
    )
  }


  syncDatas(datas : any)
  {
    this.listPkn = datas.results
    this.numberTotal = datas.count
    this.urlNext = datas.next
    this.urlPrev = datas.previous
  }

}
