import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  nombre: string = 'Tobias Blaksley'
  enMayusculas: boolean = true
  ordenarClick: string = "";
  heroes: Heroe[] = [
    {
      nombre: 'Goku',
      fuerza: 100,
      velocidad: 100,
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Superman',
      fuerza: 90,
      velocidad: 100,
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'IronMan',
      fuerza: 30,
      velocidad: 20,
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Gohan',
      fuerza: 85,
      velocidad: 90,
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Thor',
      fuerza: 95,
      velocidad: 90,
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      fuerza: 8,
      velocidad: 5,
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      fuerza: 5,
      velocidad: 6,
      vuela: false,
      color: Color.verde
    }
]

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas
  }

  ordenarPor( value: string ) {
    this.ordenarClick = value
  }

}
