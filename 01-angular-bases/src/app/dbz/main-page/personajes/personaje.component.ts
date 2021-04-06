import { Component, OnInit } from '@angular/core';
import { DbzService } from '../../dbz.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  // @Input('data') personajes: Personaje[] = [];

  get personajes() {
    return this.DbzService.personajes;
  }

  constructor(private DbzService: DbzService) { }

  ngOnInit(): void {
  }

}
