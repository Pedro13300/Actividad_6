import { Component, Input, } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';
import { BotonesComponent } from '../../components/botones/botones.component';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [RouterLink, BotonesComponent],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  @Input() miUsuario!: IUsuario;

}
