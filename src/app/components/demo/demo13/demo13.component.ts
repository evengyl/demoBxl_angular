import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from './validators/email.validator';
import { PasswordConfirmValidator } from './validators/passwordCompare.validator';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html'
})
export class Demo13Component implements OnInit {

  myForm : FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        name : ["", [Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(20)], 
                        [/*Validators ASYNCHRONE*/]],
        email : ["", [Validators.required,
                      Validators.email,
                      EmailValidator], []],
        password : ["", [Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(25)], []],
        passwordConfirm : ["", [Validators.required,
                          Validators.minLength(6),
                          Validators.maxLength(25)], []],
        gender : ["", [Validators.required], []]
      },
      {
        validator : PasswordConfirmValidator
      }
    )
  }


  
  submitForm()
  {
    if(this.myForm.valid)
    {
      console.log("OK Valide !")
      //OK !!!!
    }
  }


  test(){
    console.log(this.myForm)
  }


}
