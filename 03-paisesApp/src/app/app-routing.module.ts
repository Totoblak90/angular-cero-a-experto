import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { VerUnPaisComponent } from './paises/pages/ver-un-pais/ver-un-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:idPais',
    component: VerUnPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot( routes )]
})
export class AppRoutingModule { }
