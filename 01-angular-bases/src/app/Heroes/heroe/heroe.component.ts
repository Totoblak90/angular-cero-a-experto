import { Component } from "@angular/core";


interface Direc {
    calle: string;
    altura: number;
    ciudad: string;
    estado: string;
    pais: string
}

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    alterEgo: string = 'Tony Stark';
    edad: number = 45;
    direccion: Direc = {
        calle: '5th Avenue',
        altura: 197,
        ciudad: 'Manhattan',
        estado: 'New York',
        pais: 'EEUU'
    }
    

    
    get nombreToUppercase() : string {
        return this.nombre.toUpperCase()
    }
    
    get direccionToString() : string {
        return "El heroe vive en: " + this.direccion.calle + " " + this.direccion.altura  + ", " + this.direccion.ciudad + ", " + this.direccion.estado + ", " + this.direccion.pais + ".";
    }
    
    cambiarHeroe (): void {
        this.nombre = 'Spiderman';
        this.alterEgo = 'Peter Parker';
        this.edad = 30;
        this.direccion = {
            ...this.direccion,
            calle: '9th Street',
            altura: 320,
            ciudad: 'Brooklyn'
        }
    }
    



}