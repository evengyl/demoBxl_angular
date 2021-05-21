import { AbstractControl } from "@angular/forms";


/**
     * @description
     * @param
     * Clé = nom de la variable erreur
     * @param
     * Valeur = message de l'erreur
*/
export function PasswordConfirmValidator(control : AbstractControl)
{
    if(control.value.password == control.value.passwordConfirm)
        return null
    else
        return {ErrorComparePass : "Les deux mots de passe ne corresponde pas"}
}