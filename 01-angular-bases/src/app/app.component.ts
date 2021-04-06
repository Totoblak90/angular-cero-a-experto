import { Component } from '@angular/core';

// El decorador component siempre lleva un objeto como propiedad que tiene dos parametros obligatorios. el primero es el selector y el segundo es el template url
@Component({
  selector: 'app-root', // Esta propiedad es obligatoria, determina donde se va a renderizar el componente de la clase creada abajo. En este caso apunta a app-root por q es el componente del index.html que se encuentra fuera del source y que es lo que Angular usa para renderizar en el navegador.
  templateUrl: './app.component.html', // Esta propiedad también es obligatoria y determina cual es el template de html con el que yo voy a estar trabajando con esta clase/ componente y que luego se va a agregar al app-root que declare en la propiedad anterior.
  styleUrls: ['./app.component.css'] // Esta propiead es opcional, determina cual es la hoja de estilos que voy a estar usando para este html.
})
export class AppComponent {
  // Yo puedo pasar a mi componente html declarado en el decorador las propiedades que declare en esta clase y va a renderizar el contenido de las mismas.

}
