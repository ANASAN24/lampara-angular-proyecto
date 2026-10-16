import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  imports: [],
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css'
})
export class LamparaComponent {

  //inputs/outputs
  enchufadaHIJA = input<boolean>(false);
  estadoLampara = output<string>();
  //propiedades clase
  encendida = false;

//eventos
  onApagarEncender() {
    this.encendida = !this.encendida;
    this.estadoLampara.emit(this.encendida ? 'ENCENDIDA' : 'APAGADA');
  }
}
