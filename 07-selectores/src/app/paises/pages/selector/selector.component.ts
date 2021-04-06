import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators'

import { PaisesService } from '../../services/paises.service';

import { Paises } from '../../interfaces/paisesPorRegion.interface';
import { PaisCompleto } from '../../interfaces/paisPorCodigo.interface';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [
  ]
})
export class SelectorComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', [Validators.required] ],
    pais: [ '', [Validators.required]],
    fronteras: [ '', [Validators.required]]
  })

  // LLenar selectores
  regiones: string[] = [];
  paises: Paises[] = [];
  fronteras: string[] = []

  // UI
  cargando: boolean = false;

  constructor( private fb: FormBuilder,
                private paisesService: PaisesService) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(
          ( _ ) => {

            this.miFormulario.get('pais').reset('')
            this.cargando = true
          }
        ),
        switchMap( region => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe( paises => {
        this.paises = paises
        this.cargando = false
      })
    
    this.miFormulario.get('pais')?.valueChanges
      .pipe (
        tap(
          ( _ ) => {
            this.miFormulario.get('fronteras').reset("")
            this.cargando = true
          }
        )
      )
      .subscribe( pais => {
        this.paisesService.getPaisPorCodigo(pais)
          .subscribe( fronteras => {
            this.fronteras = fronteras?.borders || []
            this.cargando = false
          })
      })

  }

  guardar() {
    console.log(this.miFormulario.value)
  }

}
