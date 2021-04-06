import { Component } from '@angular/core';

interface MenuItems {
  texto: string;
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `

  ]
})
export class SidemenuComponent {

  templateMenu: MenuItems[] = [
    {
      texto: 'Básicos',
      ruta: 'template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: 'template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'template/switches'
    }
  ]

  reactiveMenu: MenuItems[] = [
    {
      texto: 'Básicos',
      ruta: 'reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: 'reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'reactive/switches'
    }
  ]

  authMenu: MenuItems[] = [
    {
      texto: 'Registro',
      ruta: 'auth/register'
    },
    {
      texto: 'Login',
      ruta: 'auth/login'
    }
  ]
}
