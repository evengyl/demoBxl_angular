import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './Article.model';

@Pipe({
  name: 'calculateTVA',
  pure : false //permet a angular de relancer le pipe pour chaque changement détecter sur la page
  //attention, détruit drastiquement les performance mais actuellement c'est la meilleur solution
  //nous aurions pus faire ces calcules dans le compo, mais c'est tellement fun les pipe :)
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
