import { FormBuilder, Validators } from "@angular/forms"

//mettre la méthode generate en static permet de ne pas devoir faire ceci dans le composant
// let generateformulaire = new generateForm()
// let myForm = generateformulaire.generate

export class generateForm
{
    static login()
    {
      return new FormBuilder().group(
      {
        name : ["", [Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(20)], 
                        [/*Validators ASYNCHRONE*/]],
        email : ["", [Validators.required,
                                  Validators.email], []],
        password : ["", [Validators.required,
                                Validators.minLength(6),
                                Validators.maxLength(25)], []],
        gender : ["", [Validators.required], []]
      },
      {
        //validateurs de groupes
      })
    }
}
