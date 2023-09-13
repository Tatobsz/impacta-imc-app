import { Component } from '@angular/core';
import { ImcChainStarter } from 'src/chain-of-responsability/imc-chain-starter';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css'],
})
export class CalculadoraImcComponent {
  public peso?: number;
  public altura?: number;

  calcularImc(): void {
    if (!this.peso || !this.altura) {
      alert('Os valores informados não são válidos');
    } else {
      const imc = this.peso! / (this.altura! * this.altura!);

      alert(
        `Com IMC de ${imc.toFixed(
          2
        )}, você está na categoria ${ImcChainStarter.startChain().obterTipo(
          imc
        )}.`
      );
    }
  }
}
