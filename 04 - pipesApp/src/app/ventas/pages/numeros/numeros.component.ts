import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  gananciaNeta: number = 237816327.1233
  gananciaBruta: number = this.gananciaNeta + this.gananciaNeta * 0.31
  porcentaje: number = this.gananciaNeta / this.gananciaBruta

  constructor() { }

  ngOnInit(): void {
  }

}
