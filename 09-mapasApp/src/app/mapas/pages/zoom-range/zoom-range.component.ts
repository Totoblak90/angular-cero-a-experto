import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      witdh: 100%;
      height: 100%;
    }

    .row {
      witdh: 400px;
      background-color: white;
      border-radius: 10px;
      padding: 10px;
      position: fixed;
      bottom: 50px;
      left: 50px;
      z-index: 999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa: ElementRef;
  mapa: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-58.571491094583486, -34.49893479105062];

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {})
    this.mapa.off('zoomend', () => {})
    this.mapa.off('move', () => {})
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
      });

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    })

    this.mapa.on('zoomend', () => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18)
      }
    })

    this.mapa.on('move', () => {
      const mapPosition = this.mapa.getCenter()
      this.center = [mapPosition.lng, mapPosition.lat]
    })

  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn()
  }

  zoomCambio( valor: string ) {
    this.mapa.zoomTo(Number(valor))
  }

}
