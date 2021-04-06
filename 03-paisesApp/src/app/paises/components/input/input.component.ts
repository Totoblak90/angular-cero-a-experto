import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  termino:string = '';
  debouncer: Subject<string> = new Subject()

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input('placeholder') placeholder:string = "";


  constructor() { }

  ngOnInit(): void {

    this.debouncer
    .subscribe( (valor) => {

      this.onDebounce.emit( valor )

    })

  }

  buscar() {

  this.onEnter.emit( this.termino )  

  }
  teclaPresionada(  ) {
    
    this.debouncer.next( this.termino )
  }

}
