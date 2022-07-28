import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  abrirEspacio: boolean = false;
  subcription?: Subscription;
  public esAdmin: boolean = false;

  constructor(
    private uiService: UiService,
    private tokenService: TokenService
  ) { 
    this.subcription = this.uiService.onToggleEspacio()
    .subscribe(value => this.abrirEspacio = value)
  }

  ngOnInit(): void {
    if(this.tokenService.esAdmin()){
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

  toogleAgregarEspacio(){
    this.uiService.toggleAgregarEspacio();
  }


}
