import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Thor', 'Scarlett Witch', 'Hulk', 'Captain America'];
  heroeBorrado: string[] = [];

  borrarHeroe() {

    if (this.heroeBorrado.length <= this.heroes.length) {
      let heroeBorrado = this.heroes.pop();
      this.heroeBorrado.push(heroeBorrado);
      if (this.heroes.length === 1) {
        this.heroes = ['Thor es inmortal!']
      }
    }


  }
  
}
