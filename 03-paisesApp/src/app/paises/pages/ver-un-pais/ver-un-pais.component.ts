import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service';

import { BuscarPaisType } from '../../interfaces/interface.buscarPais';

@Component({
  selector: 'app-ver-un-pais',
  templateUrl: './ver-un-pais.component.html',
  styles: [
  ]
})
export class VerUnPaisComponent implements OnInit {

  pais:BuscarPaisType;

  constructor( private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( params => this.paisesService.verUnPais( params.idPais )),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais )

    // this.activatedRoute.params
    //   .subscribe( params => {
    //     console.log(params.idPais)
    //     this.paisesService.verUnPais( params.idPais )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })
    //   })

  }

}
