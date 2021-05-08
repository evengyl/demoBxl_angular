import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './exos3.component';

@Pipe({
  name: 'calculateTVA',
  pure : false //permet a angular de relancer le pipe pour chaque changement détecter sur la page
  //attention, détruit drastiquement les performance mais actuellement c'est la meilleur solution
  //nous aurions pus faire ses calcules dans le compo, mais c'est tellement fun les pipe :)
})
export class CalculateTVAPipe implements PipeTransform {
  
  public totHtva : number = 0
  public totTvac : number = 0

  transform(value: Article[], ...args: string[]): string {


    if(args[0] == "htva")
    {
      value.forEach((item) => {
        this.totHtva += parseInt(item.qty) * parseInt(item.uPrice)
      })
      return `Total hors TVA : ${this.totHtva} €`;
    }
    else if(args[0] == "tvac")
    {
      value.forEach((item) => {
        this.totTvac += parseInt(item.qty) * parseInt(item.uPrice) * 1.21
      })
      return `Total TVA comprise : ${this.totTvac} €`;
    }

    
  }

}
