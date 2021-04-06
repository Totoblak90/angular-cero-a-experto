export enum Color {
    rojo, verde, azul, amarillo, negro
}

export interface Heroe {
    nombre: string;
    fuerza: number;
    velocidad: number;
    vuela: boolean;
    color: Color;
}