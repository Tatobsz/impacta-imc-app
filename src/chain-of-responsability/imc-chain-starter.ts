import { ImcChain } from './imc-chain/imc-chain';
import { Magreza } from './imc-chain/magreza';

export class ImcChainStarter {
  static startChain(): ImcChain {
    return new Magreza();
  }
}
