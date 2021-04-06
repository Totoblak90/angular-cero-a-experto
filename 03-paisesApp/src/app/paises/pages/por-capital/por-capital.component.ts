import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';


import { PaisesService } from '../../services/paises.service';

import { BuscarPaisType } from '../../interfaces/interface.buscarPais';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string = ''
  hayError: boolean = false;
  paises: BuscarPaisType[] = [];

  constructor( private porPaisService: PaisesService ) { }

  ngOnInit(): void {
  }

  buscar( laBusqueda: string ) {

    this.hayError = false;
    this.termino = laBusqueda;

    this.porPaisService.buscarPorCapital( laBusqueda )
      .subscribe(paises => {

        this.paises = paises;
      },
      err => {
        this.hayError = true
        this.paises = [];
      });

  }

  sugerencias( event: string ) {

    this.hayError = false
     
    if (event === "") {
      this.paises = []
    }
 
     this.porPaisService.buscarPorPais( event )
       .pipe ( tap(console.log) )
       .subscribe( sugerencias => {
         if(sugerencias !== [] ) {
           this.paises = sugerencias
         }
       })
 
   }
   aceptarSugerencia( pais: BuscarPaisType ) {
 
     this.paises = []
     this.paises.push(pais)
     
   }

}
