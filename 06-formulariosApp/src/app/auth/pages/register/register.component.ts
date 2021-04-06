import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { HttpValidationsService } from '../../../shared/validator/http-validations.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // Temporal

  // Temporal

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.pattern(this.validatorService.nombrePattern)]],
    email: [ , [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [ this.httpValidator ]],
    userName: [ , [ Validators.required, this.validatorService.noPuedeSerTotoBlak901 ]],
    password: [ , [Validators.required, Validators.minLength(6)]],
    confirmPassword: [ , [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'confirmPassword')]
  })

  get emailErrorMsg():string {
    const errorMsg = this.miFormulario.get('email').errors

    if ( errorMsg.required ) {
      return 'Este campo es obligatorio'
    }
    else if ( errorMsg.pattern ) {
      return 'El campo debe tener un formato de correo electrónico'
    }
    else if (errorMsg.emailTomado ) {
      return 'Es correo electrónico ingresado ya existe'
    }

    return ''
  }


  constructor(  private fb: FormBuilder, 
                private validatorService: ValidatorService,
                private httpValidator: HttpValidationsService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Tobias Blaksley',  
      email: 'test@test.com',
      userName: 'TotoBlak90',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  campoNoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched
  }

  // emailRequired() {
  //   return this.miFormulario.get('email').errors?.required
  //           && this.miFormulario.get('email').touched
  // }
  // emailPattern() {
  //   return this.miFormulario.get('email').errors?.pattern
  //           && this.miFormulario.get('email').touched
  // }
  // emailExistente() {
  //   return this.miFormulario.get('email').errors?.emailTomado
  //           && this.miFormulario.get('email').touched
  // }

  submitForm () {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }

    console.log(this.miFormulario.value)
  }

}
