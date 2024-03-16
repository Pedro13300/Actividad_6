import { Component, inject } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuarioCardComponent } from '../../componets/usuario-card/usuario-card.component';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [UsuarioCardComponent],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.css'
})
export class UsuariosListComponent {
  usuariosService = inject(UsuariosService);
  arrUsuarios: IUsuario[] = [];

  async ngOnInit(): Promise<void> {
    try{
      await this.usuariosService.getAll().then((res) => {
        this.arrUsuarios = res.results
        console.log(this.arrUsuarios)
      },
    (error) => {
      console.error('Pon un mensaje de error:', error);
    });
    }
    catch(error){
      console.error('Pon un mensaje de error:', error);
    }
  }
  
}
