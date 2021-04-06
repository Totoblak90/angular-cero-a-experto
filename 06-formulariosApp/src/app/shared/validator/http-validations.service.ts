import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpValidationsService implements AsyncValidator {

  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {

    console.log(control.value)
    
    return this.http.get<any[]>( `http://localhost:3000/usuarios?q=${control.value}` )
              .pipe(
                // delay(1500),
                map( resp => {
                  return (resp.length === 0)? null : {emailTomado: true}
                })
              )

  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
