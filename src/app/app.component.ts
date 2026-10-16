import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lampara-proyect';

  enchufada:boolean = false;

  estadoLampara = '';

  //listener de eventos
  onClickDesenchufar() {
    this.enchufada = false;
  }

  onClickEnchufar() {
    this.enchufada = true;
  }

  onCambioEstadoLampara(estado: string) {
    this.estadoLampara = estado;
  }
}
