import { ImcChain } from './imc-chain';
import { Normal } from './normal';

export class Magreza extends ImcChain {
  constructor() {
    super(new Normal());
  }

  override obterTipo(imc: number): string {
    if (imc <= 18.5) return 'Magreza';
    return this.next!.obterTipo(imc);
  }
}
