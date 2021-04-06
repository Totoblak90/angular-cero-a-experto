import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BuscarPaisType } from '../interfaces/interface.buscarPais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiBaseUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient ) { }

  buscarPorPais ( termino: string ):Observable <BuscarPaisType[]> {

    const params = new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population')

    const url: string = `${this.apiBaseUrl}/name/${termino}`
    return this.http.get<BuscarPaisType[]>( url, { params } );

  }

  buscarPorCapital ( termino: string ):Observable <BuscarPaisType[]> {

    const params = new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population')

    const url: string = `${this.apiBaseUrl}/capital/${termino}`
    return this.http.get<BuscarPaisType[]>( url, {params} );

  }
  buscarPorRegion ( termino: string ):Observable <BuscarPaisType[]> {

    const params = new HttpParams()
      .set('fields', 'name;capital;alpha2Code;flag;population')

    const url: string = `${this.apiBaseUrl}/region/${termino}`
    return this.http.get<BuscarPaisType[]>( url, { params } )

  }
  verUnPais ( termino: string ):Observable <BuscarPaisType> {

    const url: string = `${this.apiBaseUrl}/alpha/${termino}`
    return this.http.get<BuscarPaisType>( url );

  }


}
