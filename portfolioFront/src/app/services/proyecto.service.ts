import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  apiPro = environment.apiPro;

  constructor(
    private http: HttpClient
  ) { }

  getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiPro)
  }

  get(id: number): Observable<Proyecto> {
    const url = `${this.apiPro}/${id}`
    return this.http.get<Proyecto>(url);
  }

  masProyectos(formData: FormData): Observable<any> {
    return this.http.post(this.apiPro + 'crear', formData);
  }

  editProyecto(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiPro + `editar/${id}`, formData)
  }

  eliminarProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(this.apiPro + `eliminar/${id}`)
  }


}
