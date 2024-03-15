import { Routes } from '@angular/router';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
    {path: 'Usuarios', component: UsuariosListComponent},
];
