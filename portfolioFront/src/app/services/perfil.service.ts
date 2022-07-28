import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  apiPer = environment.apiPer;

  constructor(
    private http: HttpClient
  ) { }

  getPerfil(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.apiPer)
  }

  get(id: number): Observable<Perfil> {
    const url = `${this.apiPer}/${id}`
    return this.http.get<Perfil>(url);
  }

  masPerfiles(formData: FormData): Observable<any> {
    return this.http.post(this.apiPer + 'crear', formData);
  }

  editPerfil(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiPer + `editar/${id}`, formData)
  }

  eliminarPerfil(id: number): Observable<Perfil> {
    return this.http.delete<Perfil>(this.apiPer + `eliminar/${id}`)
  }

}
