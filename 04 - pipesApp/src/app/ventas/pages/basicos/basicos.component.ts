import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLowerCase: string = 'tobias blaksley'
  nombreUpperCase: string ='TOBIAS BLAKSLEY'
  nombreTitleCase: string = 'ToBiAs BlAkSlEy'

  fecha: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
