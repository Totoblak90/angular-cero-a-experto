function queTipoSoy<T>(argumento: T) {
    console.log('Tipo de dato: ' + typeof argumento + ' , argumento pasado: ' + argumento)
}

let soyString = queTipoSoy('Hola');
let soyNumber = queTipoSoy(12);
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);
let soyObjeto = queTipoSoy({nombre: 'Tobias', edad: 30});

