import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html'
})
export class Demo12Component implements OnInit {

  public myForm : FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.generateForm()
  }


  generateForm()
  {
    this.myForm = this.fb.group({
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

  submitForm()
  {
    console.log(this.myForm.value)
    console.log(this.myForm.controls)
    console.log(this.myForm.invalid)
    if(this.myForm.valid)
    {
      console.log("OK Valide !")
      //OK !!!!
    }
  }

  remplir()
  {
    this.myForm.controls.name.setValue("J-P")
    this.myForm.controls.email.setValue("mail@JP.com")
    this.myForm.controls.password.setValue("test1234")
    this.myForm.controls.gender.setValue("Homme")
  }



}
