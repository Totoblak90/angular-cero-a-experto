import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs-page/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs-page/resultados/resultados.component';


@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
