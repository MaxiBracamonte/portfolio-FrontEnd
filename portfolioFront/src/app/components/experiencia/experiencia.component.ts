import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

 
  abrirExperiencia: boolean = false;
  subcription?: Subscription;
  public esAdmin: boolean = false;

  constructor(
    private uiService: UiService,
    private tokenService: TokenService
  ) {
    this.subcription = this.uiService.onToggleExperiencia()
    .subscribe(value => this.abrirExperiencia = value)
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  toogleAgregarExperiencia(){
    this.uiService.toggleAgregarExperiencia();
  }

}
