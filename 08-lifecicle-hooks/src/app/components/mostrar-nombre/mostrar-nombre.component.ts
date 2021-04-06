import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mostrar-nombre',
  templateUrl: './mostrar-nombre.component.html',
  styles: [
  ]
})
export class MostrarNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }

}
