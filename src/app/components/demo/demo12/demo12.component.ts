import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateForm } from './login.form';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html'
})
export class Demo12Component implements OnInit {

  public myForm : FormGroup

  constructor() {
  }

  ngOnInit(): void {
    this.myForm = generateForm.login()
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


  test(){
    console.log(this.myForm)
  }



}
