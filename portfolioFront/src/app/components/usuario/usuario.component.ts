import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  public usuarios: Usuario[] = [];
  public editUsuario: Usuario | undefined ;
  public deleteUsuario!: Usuario;
 

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios(); 
  }

  public getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (response:Usuario[]) => {
        this.usuarios = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  public onAddUsuario(addForm: NgForm):void {
    document.getElementById('add-usuario-modal')?.click();
    this.usuarioService.addUsuario(addForm.value).subscribe(
      (response: Usuario) => {
        console.log(response);
        this.getUsuarios();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public onUpdateUsuario(usuario: Usuario):void {
      this.usuarioService.updateUsuario(usuario).subscribe(
      (response: Usuario) => {
        console.log(response);
        this.getUsuarios();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public onDeleteUsuario(id: number):void {
    this.usuarioService.deleteUsuario(id).subscribe(
    (response: void) => {
      console.log(response);
      this.getUsuarios();
      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
  
  }

  public onOpenModal(usuario: Usuario, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUsuarioModal');
    }
    if (mode === 'edit') {
      this.editUsuario = usuario;
      button.setAttribute('data-target', '#updateUsuarioModal');
    }
    if (mode === 'delete') {
      this.deleteUsuario = usuario;
      button.setAttribute('data-target', '#deleteUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }
}


 /*

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

  
}*/
