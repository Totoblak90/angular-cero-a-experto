import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validacionNombreProducto (): boolean {
    return  this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched
  }

  validacionPrecio (): boolean {

    return  this.miFormulario?.controls.precio?.touched   
            && this.miFormulario.controls.precio?.value < 10

  }

  validacionExistencias (): boolean {

    return  this.miFormulario?.controls.existencias?.touched   
            && this.miFormulario.controls.existencias?.value < 5

  }

  guardar() {
    console.log(this.miFormulario);

    this.miFormulario.resetForm()
    
  }

}
