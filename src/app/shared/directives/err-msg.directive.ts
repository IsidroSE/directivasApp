import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  @Input()
  color: string = "red";

  @Input()
  mensaje: string = "Placeholder";

  constructor( private elemento: ElementRef<HTMLElement> ) {
    this.htmlElement = elemento;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this.mensaje;
  }

}
