import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Placeholder';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( newColor: string) {
    this._color = newColor;
    this.setColor();
  };

  // @Input() mensaje: string = "Placeholder";
  @Input() set mensaje( valor: string ) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido( valor: boolean ) {
    if ( !valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }  

  constructor( private elemento: ElementRef<HTMLElement> ) {
    this.htmlElement = elemento;
  }

  /* Esto no es optimo porque cambia cada vez que cambia alguno de los inputs y 
  habria que hacer if/else para controlar cada caso */
  ngOnChanges(changes: SimpleChanges): void {
    //this.setMensaje();
    //this.setColor();

    //if ( changes['mensaje'] ) {
      //cambiar color
    //}
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

  private highlight(color: string) {
    this.htmlElement.nativeElement.style.backgroundColor = color;
  }

}
