import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../service/usuarios.service';
import { BotonesComponent } from '../../components/botones/botones.component';


@Component({
  selector: 'app-usuario-view',
  standalone: true,
  imports: [RouterLink, BotonesComponent],
  templateUrl: './usuario-view.component.html',
  styleUrl: './usuario-view.component.css'
})
export class UsuarioViewComponent {
  
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  unUsuario!: IUsuario;

  ngOnInit(): void {
    
      this.activatedRoute.params.subscribe(async (params: any) => {
        const id = params.idusuario;
        try {
          this.unUsuario = await this.usuariosService.getById(id);
        } catch (error) {
          console.log(error)
        }
      })
  }
}
