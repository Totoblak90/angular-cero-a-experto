import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ ,[Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array( [], Validators.required    )
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  esInvalido( campo: string ) {
    return this.miFormulario.controls[campo].invalid 
            && this.miFormulario.controls[campo].touched
  }

  agregarFavorito() {
    if (this.nuevoFavorito.valid) {
      this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required))
    }
    this.nuevoFavorito.reset()
  }

  eliminarFavorito( index: number) {
    
    this.favoritosArr.removeAt(index)

  }

  guardar() {
    if ( this.miFormulario.invalid ) {
      return this.miFormulario.markAllAsTouched()
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }

}
