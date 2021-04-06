import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { BuscarPaisType } from '../../interfaces/interface.buscarPais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      ul {
        overflow: scroll;
        max-height: 200px;
      }
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = ''
  hayError: boolean = false;
  paises: BuscarPaisType[] = [];
  
  constructor( private porPaisService: PaisesService) { }

  ngOnInit(): void {
  }

  buscar( laBusqueda: string ) {

    this.hayError = false;
    this.termino = laBusqueda;

    this.porPaisService.buscarPorPais( laBusqueda )
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
