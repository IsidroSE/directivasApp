import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    
  `]
})
export class AgregarComponent implements OnInit {

  errorMSg: string = "El campo es obligatorio."
  color: string = 'orange';

  form: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  tieneError( campo: string): boolean {
    return this.form.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.errorMSg += '!!';
  }

  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
