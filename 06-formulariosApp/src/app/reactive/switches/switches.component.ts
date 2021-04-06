import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ '', Validators.required ],
    notificaciones: [ true ],
    terminos: [ null, Validators.requiredTrue ]
  })

  persona = {
    genero: '',
    notificaciones: false
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset( this.persona )
  }

  guardar() {
    if (this.miFormulario.invalid) {
      return;
    }

    const actualizarPersona = {...this.miFormulario.value}
    delete actualizarPersona.condiciones

    this.persona = actualizarPersona
    console.log(this.miFormulario)
    console.log(this.persona)
  }
}
