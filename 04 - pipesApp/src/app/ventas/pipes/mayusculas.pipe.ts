import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform( valor: string, enMinusculas: boolean = true): string {
        return (enMinusculas) 
            ? valor.toUpperCase() 
            : valor.toLowerCase()
    }
}