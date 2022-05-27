import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public usuario: Usuario | undefined;
 

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  //agregado
  public getUsuario():void{
    this.usuarioService.getUsuario().subscribe({
      next:(Response: Usuario) => {
        this.usuario=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }
  //video
  public getUsuarios():void{
    this.usuarioService.getUsuarios().subscribe(
      (Response: Usuario[]) => {
        this.usuarios=Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }  

  
}
