import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './Article.model';

@Pipe({
  name: 'calculateTVA',
})
export class CalculateTVAPipe implements PipeTransform {
  
  public totHtva : number
  public totTvac : number

  transform(value: Article[], ...args: string[]): string {
    this.totHtva = 0
    this.totTvac = 0

    if(args[0] == "htva")
    {
      value.forEach((item) => {
        this.totHtva += item.qty * item.uPrice
      })
      return `Total hors TVA : ${this.totHtva} €`;
    }
    else if(args[0] == "tvac")
    {
      value.forEach((item) => {
        this.totTvac += item.qty * item.uPrice * 1.21
      })
      return `Total TVA comprise : ${this.totTvac} €`;
    }
  }

}
