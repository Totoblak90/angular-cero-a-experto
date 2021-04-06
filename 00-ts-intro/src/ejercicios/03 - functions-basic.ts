function sumar(a:number, b:number):number {
    return a + b;
}

let resultado = sumar(100, 50);

console.log(resultado);

const multiplicarFlecha = (a:number, b?:number, c:number = 5): number => {
    return a * c
}

resultado = multiplicarFlecha(10);

console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: () => void;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Aragorn',
    pv: 12000,
    mostrarPV: () => {
        console.log("El personaje tiene: ", nuevoPersonaje.pv, " puntos de vida." )
    }
}

function curar(a: PersonajeLOR, curarX:number): void {
    a.pv += curarX
}

curar(nuevoPersonaje, 3725);

nuevoPersonaje.mostrarPV();