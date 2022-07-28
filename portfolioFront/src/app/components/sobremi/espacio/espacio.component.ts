import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/models/sobremi';
import { SobremiService } from 'src/app/services/sobremi.service';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {
  espacios: Sobremi[] = [];

  constructor(
    private espaSer: SobremiService
  ) { }

  ngOnInit(): void {
    this.espaSer.getContenedor().subscribe((espacios) => {
      this.espacios = espacios;
    })
  }

  agregarEspacios(event: any) {

    this.espaSer.masContenedores(event).subscribe((espa) => {
      this.espacios.push(espa)
      this.espaSer.getContenedor().subscribe((espacios) => {
        this.espacios = espacios;
      })
    })

  }

  eliminarEspacios(espa:Sobremi) {

    this.espaSer.eliminarContenedor(espa.id)
      .subscribe(() => {
        this.espacios = this.espacios.filter((t) => t.id !== espa.id)
      })

  }

}
