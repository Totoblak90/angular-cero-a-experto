import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { BuscarPaisType } from '../../interfaces/interface.buscarPais';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['americas', 'asia', 'europe', 'africa', 'oceania'];
  regionActiva: string = '';
  paises: BuscarPaisType[] = [];

  constructor( private paisesService: PaisesService ) { }

  ngOnInit(): void {
  }

  activarRegion ( region: string ) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisesService.buscarPorRegion( this.regionActiva )
      .subscribe( paises => {
        this.paises = paises;
      })
  }

}
