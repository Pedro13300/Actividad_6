import { Component, inject, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../service/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipo: string = 'Nuevo';
  usuariosForm: FormGroup;
  usuariosServices = inject(UsuariosService);
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.usuariosForm = new FormGroup({
      first_name: new FormControl( '', [ 
        Validators.required,
        Validators.minLength(3),
      ]),
      last_name: new FormControl( '', [
        Validators.required
      ]),
      email: new FormControl( '', [
        Validators.required,

        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      username: new FormControl( '', [
        Validators.minLength(5),
        Validators.required,
      ]),
      Image: new FormControl( '', []),
  }, [])
  }

  
      
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      if (params.id) {
        const response = await this.usuariosServices.getById(params.id);
        this.usuariosForm = new FormGroup({
          _id: new FormControl( response._id),
          first_name: new FormControl( response.first_name, []),
          last_name: new FormControl( response.last_name, []),
          email: new FormControl( response.email, []),
          username: new FormControl( response.username, []),
          Image: new FormControl( response.image, []),
      }, [])

      }
    
  });
      
}

async getDataForm() {
  if (this.usuariosForm.value._id) {
    //actualizando
    const response = await this.usuariosServices.update(this.usuariosForm.value);
    if (response.id) {
      Swal.fire(`El usuario ${response.first_name} se ha actualizado con éxito`);
      this.router.navigate(['/usuarios']);
    }
    else {
      Swal.fire('Error al actualizar el usuario');
    }
  } else {
    const response = await this.usuariosServices.insert(this.usuariosForm.value)
    if (response.id) {
      Swal.fire(`El usuario ${response.first_name} se ha añadido con éxito`)
      this.router.navigate(['/usuarios'])
    } else {
      Swal.fire('Ha habido un error al insertar el usuario')
    }
  }
}
checkError(FormcontrolName: string, validador: string): boolean | undefined {
  return this.usuariosForm.get(FormcontrolName)?.hasError(validador) && this.usuariosForm.get(FormcontrolName)?.touched

}
}
