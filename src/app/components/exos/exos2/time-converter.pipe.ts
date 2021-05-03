import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    let heures = Math.floor(value/3600)
    let jours = Math.floor(heures/24)
    heures = heures - (jours * 24)
    value = value - (heures * 3600)

    let seconds = value % 60
    let minuts = Math.floor(value/60)

    let joursST = jours.toString()
    let strForS_Jour = "jour"
    if(jours > 1 ) strForS_Jour = "jours"

    let heuresST = heures.toString()
    if(heures < 10) heuresST = "0" + heuresST
    let strForS_Heure = "heure"
    if(heures > 1 ) strForS_Heure = "heures"

    let minutsST = minuts.toString()
    if(minuts < 10) minutsST = "0" + minutsST
    let strForS_Minuts = "minute"
    if(minuts > 1 ) strForS_Minuts = "minutes"

    let secondsST = seconds.toString()
    if(seconds < 10) secondsST = "0" + secondsST
    let strForS_Seconds = "seconde"
    if(seconds > 1 ) strForS_Seconds = "secondes"



    return `${joursST} ${strForS_Jour} - ${heuresST} ${strForS_Heure} : ${minutsST} ${strForS_Heure} et ${secondsST} ${strForS_Seconds}`

  }

}
