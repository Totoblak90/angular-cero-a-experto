import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
    public title: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    acumular( valor: number): number {
      return this.numero += valor;
    }
}