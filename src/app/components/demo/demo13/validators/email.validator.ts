import { AbstractControl } from "@angular/forms";


/**
     * @description
     * cette méthode renvoie un  object clé valeur { "ErrorName" : "ErrorMessage"} | null si OK 
     * @param
     * Clé = nom de la variable erreur
     * @param
     * Valeur = message de l'erreur
*/
export function EmailValidator(control : AbstractControl) : null | {[key : string] : string}
{
    if(control.value.includes("gmail"))
    {
        return {EmailErrorCustom : "Les addresse Gmail ne sont pas tolérée chez yahoo !...aidez-nous on est en PLS"}
    }
    else
        return null
}