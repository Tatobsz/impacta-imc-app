import { ImcChain } from './imc-chain';
import { Sobrepeso } from './sobrepeso';

export class Normal extends ImcChain {
  constructor() {
    super(new Sobrepeso());
  }

  override obterTipo(imc: number): string {
    if (imc <= 24.9) return 'Normal';
    return this.next!.obterTipo(imc);
  }
}
