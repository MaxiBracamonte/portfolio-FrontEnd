import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  apiEdu = environment.apiEdu;

  constructor(
    private http: HttpClient
  ) { }

  getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiEdu);
  }

  get(id: number): Observable<Educacion> {
    const url = `${this.apiEdu}/${id}`;
    return this.http.get<Educacion>(url);
  }

  masEducaciones(formData: FormData): Observable<any> {
    return this.http.post(this.apiEdu + 'crear', formData)
  }

  editEducacion(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiEdu + `editar/${id}`, formData)
  }

  eliminarEducacion(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(this.apiEdu + `eliminar/${id}`)
  }

}
