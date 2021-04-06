interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 98,
    segundo: 128,
    cancion: 'Ruleta',
    detalles: {
        autor: 'Los Piojos',
        anio: 1998
    }
}


// En este ejemplo se declara una variable con el nombre autor y también se utiliza el destructuring del objeto para sacar la propiedad autor y dejarla como una variable. Al chocarse los dos nombres la forma en que se resuelve es poner el simbolo de : y luego el nombre con que se quiere reasignar la propiedad del objeto y cuando se llama se llama con el nuevo nombre.

const autor = 'Ed Sheran'

const { cancion, detalles, segundo, volumen } = reproductor
const { autor: autorDetalle, anio  } = detalles;

console.log('La canción que se está escuchando es: ', cancion )
console.log('El autor de la cancion es: ', autorDetalle);
console.log('El anio en que se publicó es: ', anio );
console.log('El segundo actual es: ', segundo);
console.log('El volumen de reproducción es: ', volumen);

console.log(autor) // Esto me va a imprimir Ed Sheran
console.log(autorDetalle) //Esto me va a imprimir Los Piojos

// Desestructuración de Arrays

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, , p3] = dbz;

console.log('Personaje 1: ', p1)
console.log('Personaje 3: ', p3)



