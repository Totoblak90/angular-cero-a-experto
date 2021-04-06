import { Component, Input, OnInit } from '@angular/core';
import { BuscarPaisType } from '../../interfaces/interface.buscarPais';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent implements OnInit {

  @Input('paises') paises: BuscarPaisType[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
