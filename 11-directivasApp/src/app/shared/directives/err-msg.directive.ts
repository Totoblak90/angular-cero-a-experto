import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit {



  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  @Input() set valido( valor: boolean ) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  @Input()  set color( valor: string) {
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje( valor: string ) {
    this._mensaje = valor;
    this.setMensaje();
  };

  constructor( private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
   }

  ngOnInit(): void {
    this.setColor()
    this.setMensaje()
    this.setClass()
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }



}
