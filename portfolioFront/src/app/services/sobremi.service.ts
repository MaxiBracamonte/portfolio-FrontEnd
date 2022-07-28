import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sobremi } from '../models/sobremi';


@Injectable({
  providedIn: 'root'
})
export class SobremiService {

 

  apiSobreMi = environment.apiSobreMi;

  constructor(
    private http: HttpClient
  ) { }

  getContenedor(): Observable<Sobremi[]> {
    return this.http.get<Sobremi[]>(this.apiSobreMi)
  }

  get(id: number): Observable<Sobremi> {
    const url = `${this.apiSobreMi}/${id}`
    return this.http.get<Sobremi>(url);
  }

  masContenedores(formData: FormData): Observable<any> {
    return this.http.post(this.apiSobreMi + 'crear', formData);
  }

  editContenedores(id: number, formData: FormData): Observable<any> {
    return this.http.put(this.apiSobreMi + `editar/${id}`, formData)
  }

  eliminarContenedor(id: number): Observable<Sobremi> {
    return this.http.delete<Sobremi>(this.apiSobreMi + `eliminar/${id}`)
  }

}
