import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Paises } from '../interfaces/paisesPorRegion.interface';
import { PaisCompleto } from '../interfaces/paisPorCodigo.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = '//restcountries.eu/rest/v2'
  private _regiones:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones (): string[] {
    return [ ...this._regiones ]
  }
  constructor( private http: HttpClient) { }

  getPaisesPorRegion( region: string): Observable<Paises[]> {
    
    const url = `${this._baseUrl}/region/${region}?fields=alpha3Code;name`
    return this.http.get<Paises[]>(url)
  }
  getPaisPorCodigo( codigo: string): Observable<PaisCompleto | null> {

    if (!codigo) {
      return of(null)
    }
    const url = `${this._baseUrl}/alpha/${codigo}?fields=alpha3Code;name;borders`

    return this.http.get<PaisCompleto>( url );
  }
}

