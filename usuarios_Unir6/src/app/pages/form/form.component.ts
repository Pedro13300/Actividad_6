import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipo: string = 'Nuevo';
  usuariosForm: FormGroup;

  constructor(){
    this.usuariosForm = new FormGroup({
      last_name: new FormControl('', []),
      first_name: new FormControl('', []),
      email: new FormControl('', []),
      username: new FormControl('', []),
      Image: new FormControl('', []),


    }, [])
  }
  getDataForm(){
    console.log(this.usuariosForm.value);
  }

}
