import { Component, Input, inject, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioCardComponent } from '../../componets/usuario-card/usuario-card.component';
import { UsuarioViewComponent } from '../../pages/usuario-view/usuario-view.component';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterLink, UsuarioCardComponent, UsuarioViewComponent],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})

export class BotonesComponent {
 @Input() parent: string = "";
 @Input() idUsuario: string | undefined = "";
 usuariosService = inject(UsuariosService);


  async eliminarUsuario(id: string | undefined){
    if(id !== undefined) {
      let confirmacion = confirm( 'Está seguro que desea eliminar el usuario con id ' + this.idUsuario);
      if(confirmacion){
        let response = await this.usuariosService.delete(id);
        if(response._id){
          alert('Usuario eliminado con éxito' + response.last_name);
        }
      }
    }
  }

}
