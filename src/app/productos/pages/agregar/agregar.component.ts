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

  form: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  tieneError( campo: string): boolean {
    return this.form.get(campo)?.invalid || false;
  }

}
