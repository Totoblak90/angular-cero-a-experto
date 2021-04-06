// EL encadenamiento opcional sirve para decirle a TypeScript si un valor, propiedad o argumento es opcionar y también sirve para decirle a typescript si deseo que busque una propiedad cuando tiene valor pero cuando esa propiedad es undefined o null no la busque, para prevenir un error de JS. Se utiliza de la siguiente manera:

interface Pasajero {
    nombre: string,
    hijos?: string[]
    // En este caso le estoy diciendo a typescript que el objeto que voy a crear tiene que si o si tener una propiedad con nombre pero que la propiedad hijos no siempre va a estar.
  }
  
  const pasajero1: Pasajero = {
    nombre: 'Felipe'
  }
  
  const pasajero2: Pasajero = {
    nombre: 'Tobias',
    hijos: ['Bautista', 'Jacinta']
  }
  
  function imprimirHijos (pasajero: Pasajero): void {
    const cantidadDeHijos = pasajero.hijos?.length || 0;
    // En este caso le estoy diciendo a typescript que dentro del objeto pasajero que le paso como argumento busque la propiedad hijos, si la propiedad está entonces me averigua el largo de ese valor, si no está (por eso le pongo el signo de pregunta y el condicional ||), me debe poner 0 como valor, así evito que me devuelva undefined o null. Y es lo que yo busco por que en el caso de que el pasajero no tenga hijos quiero que me diga que tiene cero.
    console.log('Nombre: ' + pasajero.nombre + ', tiene ' + cantidadDeHijos + ' hijos')
  }
  
  imprimirHijos(pasajero1);
  imprimirHijos(pasajero2);