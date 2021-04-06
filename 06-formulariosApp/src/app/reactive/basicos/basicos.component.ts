import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Sin el form builder tengo que escribirlo así:
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(),
  //   existencias: new FormControl()
  // })

  // Con el form builder:

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    precio: [  , [ Validators.required, Validators.min(10) ] ],
    existencias: [ , [Validators.required, Validators.min(5)] ]
  })


  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  esInvalido ( nombreCambo: string) {
    return  this.miFormulario.controls[nombreCambo].invalid
            && this.miFormulario.controls[nombreCambo].touched
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }

    this.miFormulario.reset()

    console.log(this.miFormulario.value)
  }

}
