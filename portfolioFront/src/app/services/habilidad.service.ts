import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  apiHabi = environment.apiHabi;

  constructor(
    private http: HttpClient
  ) { }

  getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.apiHabi)
  }

  get(id: number): Observable<Habilidad> {
    const url = `${this.apiHabi}/${id}`
    return this.http.get<Habilidad>(url);
  }

  masHabilidades(formData: FormData): Observable<any> {
    return this.http.post(this.apiHabi + 'crear', formData);
  }

  editHabilidad(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiHabi + `editar/${id}`, formData)
  }

  eliminarHabilidad(id: number): Observable<Habilidad> {
    return this.http.delete<Habilidad>(this.apiHabi + `eliminar/${id}`)
  }


}
