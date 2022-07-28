import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  

  abrirProyecto: boolean = false;
  subcription?: Subscription;
  public esAdmin: boolean = false;

  constructor(
    private uiService: UiService,
    private tokenService: TokenService
  ) {
    this.subcription = this.uiService.onToggleProyecto()
    .subscribe(value => this.abrirProyecto = value)
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  toogleAgregarProyecto(){
    this.uiService.toggleAgregarProyecto();
  }

}
