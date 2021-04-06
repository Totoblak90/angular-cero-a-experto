let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// Como yo declaré que la variable habilidades es de tipo string[], typescript no me perite agregarle otro tipo de dato al array, me tira un error. EJ: habilidades.push(1) --> Esto no está permitido por typescript.

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // Agregando el signo de pregunta luego del nombre de la propiedad estoy diciendole a typescript que este objeto va a tener una propiedad que puede estar o no cuando declare el objeto.
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 1535,
    habilidades: habilidades,
}

personaje.puebloNatal = 'Gondor'

console.table(personaje);