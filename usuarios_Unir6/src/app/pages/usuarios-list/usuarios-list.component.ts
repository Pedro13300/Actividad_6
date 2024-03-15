import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuarioCardComponent } from '../../componets/usuario-card/usuario-card.component';

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

  ngOnInit(): void {

  }
}
