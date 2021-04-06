import { HttpClient, HttpParams } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';


import { SearchType } from 'src/app/Interfaces/gifs.interfaces';
import { Datum } from '../../Interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  api_key: string = '2rCuW3Ng8QBHH7lQ05D5gufVoPGO8opd'
  base_api_url: string = 'https://api.giphy.com/v1/gifs' 

  private _historial: string[] = [];

  public resultados: Datum[] = [];

  constructor( private http: HttpClient ) { 

      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];


  }

  get historial() {

    return [...this._historial]
  }

  buscarGifs( busqueda: string ) {

    busqueda = busqueda.trim().toLowerCase();

    if (busqueda === "") {

      return;

    } else if (this._historial.length >= 10) {

      this._historial.pop()
      this._historial.unshift(busqueda)

    }  else {
    
    this._historial.unshift( busqueda );

    }

    const params = new HttpParams()
      .set( 'api_key', this.api_key )
      .set( 'q', busqueda)
      .set( 'limit', '10');

    this.http.get<SearchType>(`${ this.base_api_url }/search?`, { params })
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })

      localStorage.setItem('historial', JSON.stringify(this._historial));

  }

  
}
