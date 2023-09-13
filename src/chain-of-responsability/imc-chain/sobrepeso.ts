import { ImcChain } from './imc-chain';
import { Obesidade } from './obesidade';

export class Sobrepeso extends ImcChain {
  constructor() {
    super(new Obesidade());
  }

  override obterTipo(imc: number): string {
    if (imc <= 30) return 'Sobrepeso';
    return this.next!.obterTipo(imc);
  }
}
