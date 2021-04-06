import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect

  invitadosNombres: string[] = ['Tobias Blaksley', 'Susana Hacha', 'Flor de La V']
  invitadosNombresRestored: string[] = ['Tobias Blaksley', 'Susana Hacha', 'Flor de La V']
  invitadosGeneros: string[] = ['Masculino', 'Femenino', 'Other']
  invitadosGenerosRestored: string[] = ['Masculino', 'Femenino', 'Other']
  invitadoALaVistaNombre: string = this.invitadosNombres[this.invitadosNombres.length -1]
  invitadoALaVistaGenero: string = this.invitadosGeneros[this.invitadosGeneros.length -1]


  i18SelectGenero = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla',
    'Other': 'invitarle'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Fernando', 'Tobias', 'Enrique', 'Lucia'];
  clientesMap = {
    '=0': 'Actualmente no tenemos ningún cliente esperando.',
    '=1': 'Actualmente tenemos un cliente esperando.',
    'other': 'Actualmente tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona() {
 
    if (this.invitadosGeneros.length <= 1) {
      this.invitadosNombres = [...this.invitadosNombresRestored];
      this.invitadosGeneros = [...this.invitadosGenerosRestored];
    }

    this.invitadosGeneros.pop()
    this.invitadosNombres.pop()
    this.invitadoALaVistaNombre = this.invitadosNombres[this.invitadosNombres.length -1]
    this.invitadoALaVistaGenero = this.invitadosGeneros[this.invitadosGeneros.length -1]


    console.log(this.invitadosNombres);
    console.log(this.invitadosGeneros.length);
    

  }

  atenderCliente() {
    this.clientes.pop()
  }

  // KeyValue & JSon Pipe

  persona = {
    nombre: 'Tobias',
    edad: 30,
    direccion: 'San Isidro, Buenos Aires, Argentina'
  }

  // Async Pipe
  miObservable = interval(1000)
  promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta!')
    }, 10000)
  })

}
