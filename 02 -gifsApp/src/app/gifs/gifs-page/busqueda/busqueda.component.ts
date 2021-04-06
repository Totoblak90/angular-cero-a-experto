import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtSubmitted') txtSubmitted!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }


  resultadoDeBusqueda(  ) {

    this.gifsService.buscarGifs( this.txtSubmitted.nativeElement.value );
    this.txtSubmitted.nativeElement.value = "";
    
  }

}
