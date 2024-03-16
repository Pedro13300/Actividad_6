import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IUsuario } from '../interfaces/iusuario.interface';

@Injectable({
  providedIn: 'root',
  
})
export class UsuariosService {
  httpClient = inject(HttpClient)
  baseUrl = 'https://peticiones.online/api/users'

  getAll(): Observable<IUsuario[]> {
    return this.httpClient.get<IUsuario[]>(this.baseUrl)
  }
 
  getAllPromises(): Promise<IUsuario[]> {
    return lastValueFrom(this.httpClient.get<IUsuario[]>(this.baseUrl))
  }
  
  
}
