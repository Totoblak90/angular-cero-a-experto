import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzService } from './dbz.service';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajeComponent } from './main-page/personajes/personaje.component';
import { AgregarPersonajeComponent } from './main-page/agregar-personaje/agregar-personaje.component';





@NgModule({
  declarations: [
    MainPageComponent,
    PersonajeComponent,
    AgregarPersonajeComponent
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
