import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [MenuBarComponent],
  exports: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
