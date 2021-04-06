import { Injectable } from "@angular/core";

import { Personaje } from "./interfaces/dbz.interfaces";




@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 1000000
        },
        {
          nombre: 'Vegeta',
          poder: 980000
        },
        {
          nombre: 'Trunks',
          poder: 950000
        }
      ]

      get personajes() {
          return [...this._personajes];
      }

    constructor () {

    }

    agregarPersonaje( nuevoPersonaje: Personaje) {
        this._personajes.push( nuevoPersonaje )
    }

}