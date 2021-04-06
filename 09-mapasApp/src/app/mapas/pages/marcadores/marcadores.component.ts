import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface Marcadores {
  color: string;
  marcador?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [

    `
    .mapa-container {
      witdh: 100%;
      height: 100%;
    }
    .list-group {
      position: fixed;
      right: 20px;
      top: 20px;
      z-index: 99;
    }

    li {
      cursor: pointer;
    }

    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa: ElementRef;
  mapa: mapboxgl.Map;
  zoomLevel: number = 16;
  center: [number, number] = [-58.571491094583486, -34.49893479105062];

  marcadores: Marcadores[] = [];


  constructor() { }


  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
      });

      this.leerLocalStorage()

    // this.mapa.on('click', () => {
    //   const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    //   const nuevoMarcadorClick: mapboxgl.Marker = new mapboxgl.Marker({
    //     color,
    //     draggable: true
    //   });
    //   nuevoMarcadorClick
    //     .setLngLat(this.center)
    //     .addTo(this.mapa);


    //   this.marcadores.push({
    //     color,
    //     marcador: nuevoMarcadorClick
    //   })

    // })

  }

  agregarMarcador() {

        // const markerHtml: HTMLElement = document.createElement('div')
    // markerHtml.innerHTML = 'Hola mundo'
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker(
      //   {
      //   element: markerHtml
      // }
      {
        draggable: true,
        color
      }
      )
        .setLngLat(this.center)
        .addTo(this.mapa);

    this.marcadores.push({
      color,
      marcador: nuevoMarcador
    })

    this.agregaraLocalStorage()

    nuevoMarcador.on('dragend', () => {
      this.agregaraLocalStorage()
    })
  }

  irAMarcador( m: Marcadores ) {
    console.log(m)

    this.mapa.flyTo({
      center: m.marcador.getLngLat()
    })

  }

  agregaraLocalStorage() {

    const lngLatArr: Marcadores[] = [];

    this.marcadores.forEach( m => {

      const color = m.color;
      const { lng, lat } = m.marcador.getLngLat()

      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      })

    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))

  }

  leerLocalStorage() {

    if (!localStorage.getItem('marcadores')) {
      return
    }

    const lngLatArr: Marcadores[] =   JSON.parse(localStorage.getItem('marcadores'))

    lngLatArr.forEach( m => {

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat(m.centro)
        .addTo(this.mapa)

        this.marcadores.push({
          color: m.color,
          marcador: newMarker
        })


        newMarker.on('dragend', () => {
          this.agregaraLocalStorage()
        })
    })


  }

  borrarMarcardor( i : number) {


    this.marcadores[i].marcador.remove();
    this.marcadores.splice(i, 1);
    this.agregaraLocalStorage();
  }


}
