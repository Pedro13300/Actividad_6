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

  getAll(): Promise<any> {
  return lastValueFrom(this.httpClient.get<IUsuario>(this.baseUrl))
  }
  
  getById(id:string) : Promise<IUsuario> {
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.baseUrl}/${id}`))

  }
  delete(id: string | undefined ): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.baseUrl}/${id}`))
  }
  insert(formValue: IUsuario): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.post<IUsuario>(this.baseUrl, formValue))
  }
  update(formValue: IUsuario): Promise<IUsuario> {
    return lastValueFrom(this.httpClient.put<IUsuario>(`${this.baseUrl}/${formValue._id}`, formValue))
  }
}
