import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], value: string ): Heroe[] {

    switch (value) {
      case 'nombre':
        return heroes = heroes.sort( (a,b) => (a.nombre > b.nombre)  ? 1 : -1)
      case 'fuerza':
        return heroes = heroes.sort( (a,b) => (a.fuerza > b.fuerza)  ? -1 : 1)
      case 'velocidad':
        return heroes = heroes.sort( (a,b) => (a.velocidad > b.velocidad)  ? -1 : 1)
      case 'vuela':
        return heroes = heroes.sort( (a,b) => (a.vuela > b.vuela)  ? -1 : 1)
      case 'fuerza':
        return heroes = heroes.sort( (a,b) => (a.color > b.color)  ? 1 : -1)
      default:
        return heroes = heroes.sort( (a,b) => (a.nombre > b.nombre)  ? 1 : -1)
    }
    
    heroes = heroes.sort( (a,b) => (a.nombre > b.nombre)  ? 1 : -1)
    return heroes
  }

}
