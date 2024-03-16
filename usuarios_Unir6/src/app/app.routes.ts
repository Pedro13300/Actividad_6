import { Routes } from '@angular/router';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';
import { UsuarioViewComponent } from './pages/usuario-view/usuario-view.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "usuarios"},
    {path: "usuarios", component: UsuariosListComponent,},
    {path: "usuario/:id", component: UsuarioViewComponent}
    ];







/*import { Routes } from '@angular/router';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';
import { UsuarioViewComponent } from './pages/usuario-view/usuario-view.component';

  
	export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "usuarios" },
    { path: "usuarios", component: UsuariosListComponent, children: [
        { path: "usuarios/:id", component: UsuarioViewComponent }
    ] }
]*/
