import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IUsuario } from '../interfaces/iusuario.interface';

@Injectable({
  providedIn: 'root',
  
})
export class UsuariosService {
  httpClient = Inject(HttpClient);
  baseUrl = 'https://peticiones.online/api/users';

 
  getAllPromises(): Promise<IUsuario[]> {
    return lastValueFrom(this.httpClient.get<IUsuario[]>(this.baseUrl));
  }
}
