interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => void;
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        console.log( this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais);
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(superHeroe);