import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators'
import { of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { loginResponse, Usuario } from '../auth/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _userLogged!: Usuario;

  get userLogged() {
    return { ...this._userLogged }
  }

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    const url = `${ this.baseUrl }/auth`
    const body = { email, password }

    return this.http.post<loginResponse>( url, body )
            .pipe (
              tap( resp => {
                if (resp.ok) {
                  localStorage.setItem('token', resp.token!)
                  this._userLogged = { name: resp.name!, uid: resp.uid!}
                }
              }),
              map( resp => resp.ok = true),
              catchError( err => of(err.error.msg))
            )
  }

  validateToken () {

    const url = `${ this.baseUrl }/auth/renew`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');

    return this.http.get<loginResponse>( url, { headers })

  }

  verificarToken () {
    this.validateToken()
      .subscribe( user => {

      })
  }
}
