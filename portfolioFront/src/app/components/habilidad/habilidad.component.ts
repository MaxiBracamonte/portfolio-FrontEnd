import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  abrirHabilidad: boolean = false;
  subcription?: Subscription;
  public esAdmin: boolean = false;

  constructor(
    private uiService: UiService,
    private tokenService: TokenService
  ) {
    this.subcription = this.uiService.onToggleHabilidad()
    .subscribe(value => this.abrirHabilidad = value)
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  toogleAgregarHabilidad(){
    this.uiService.toggleAgregarHabilidad();
  }


}
