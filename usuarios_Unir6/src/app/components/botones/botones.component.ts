import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  eliminarUsuario(id: string) {
    

  }

}
