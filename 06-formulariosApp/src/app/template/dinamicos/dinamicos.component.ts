import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormularioDinamico') miFormularioDinamico: NgForm;


  nuevoJuego: string = "";

  persona: Persona = {
    nombre: '',
    favoritos: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  validarNombre () {
    return this.miFormularioDinamico?.controls.nombre?.invalid
            && this.miFormularioDinamico?.controls.nombre?.touched
  }

  agregarFavorito() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push(nuevoFavorito);
    this.nuevoJuego = ""; 
  }
  eliminarJuego( index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  guardar() {
    console.log(this.miFormularioDinamico)
  }
}
