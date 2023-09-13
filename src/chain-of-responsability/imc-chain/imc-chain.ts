export abstract class ImcChain {
  constructor(protected next?: ImcChain) {}

  abstract obterTipo(imc: number): string;
}
