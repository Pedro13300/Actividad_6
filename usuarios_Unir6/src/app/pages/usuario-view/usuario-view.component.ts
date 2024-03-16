import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-usuario-view',
  standalone: true,
  imports: [],
  templateUrl: './usuario-view.component.html',
  styleUrl: './usuario-view.component.css'
})
export class UsuarioViewComponent {
  
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  unUsuario!: IUsuario;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( async (params: any) => {
      const id = params.idusuario;
      try {
      let response = await this.usuariosService.getById(id);
      console.log(response);
      }catch (error) {
        console.log(error);
      }
    })
  }
}
