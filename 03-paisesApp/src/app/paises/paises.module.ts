import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PaisesService } from './services/paises.service';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerUnPaisComponent } from './pages/ver-un-pais/ver-un-pais.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerUnPaisComponent, TablaComponent, InputComponent],
  exports: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerUnPaisComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PaisesService
  ]
})
export class PaisesModule { }
