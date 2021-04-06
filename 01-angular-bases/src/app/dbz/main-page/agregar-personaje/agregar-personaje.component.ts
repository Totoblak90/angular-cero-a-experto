import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interfaces';
import { DbzService } from '../../dbz.service';



@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit {

  nuevoPersonaje: Personaje = {
    nombre: '',
  }

  constructor( private DbzService: DbzService) { }

  ngOnInit(): void {
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar() {
    if (this.nuevoPersonaje.nombre.trim() === "") {
      return;
    }

    this.DbzService.agregarPersonaje( this.nuevoPersonaje );

    // this.onNuevoPersonaje.emit( this.nuevoPersonaje )

    this.nuevoPersonaje = {
      nombre: "".trim(),
    }

  }
}
