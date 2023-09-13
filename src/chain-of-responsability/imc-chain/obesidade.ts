import { ImcChain } from './imc-chain';

export class Obesidade extends ImcChain {
  constructor() {
    super(undefined);
  }

  override obterTipo(imc: number): string {
    return 'Obesidade';
  }
}
