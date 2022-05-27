import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
  
    private apiServerUrl = environment.apiBaseUrl;//apiBaseUrl esta en 'environment.ts'
  
    constructor(private http: HttpClient) { }

    //fijarse si esta bien (agregada)
    public getUsuario(): Observable <Usuario>{
      return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/find/1`);
    }
    //como en el video
    public getUsuarios(): Observable <Usuario[]>{
      return this.http.get<Usuario[]>(`${this.apiServerUrl}/usuario/find/all`);
    }
  
    public addUsuario(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/add`, usuario);
    }
  
    public updateUsuario (usuario: Usuario): Observable<Usuario>{
      return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario);
    }
  
    public deleteUsuario(usuarioId: number): Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/usuario/delete/${usuarioId}`);
    }
  }