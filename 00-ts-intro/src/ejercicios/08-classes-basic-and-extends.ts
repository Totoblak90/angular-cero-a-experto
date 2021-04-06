class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string,
        public edad: number
    ) { }
}

class Heroe extends PersonaNormal {
    // alterEgo: string; 
    // nombreReal: string;
    // edad: number ...> Para no repetir código en typescript se pueden declarar las propiedades de la clase directamente como argumentos del constructor de la siguiente manera:

    constructor (
        public aletrEgo: string
        ) {
            super('Tony Stark', 'New York, USA', 45);
        console.log('A mi me invocan antes que la instancia')
    }
}

// Luego cuando instancio la clase le paso como argumentos los valores que quiero que tengan las propiedades creadas en el constructor:
const superHeroeMarvel = new Heroe('Ironman');
console.log(superHeroeMarvel)