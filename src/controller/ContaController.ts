import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log("\nConta nao foi encontrada! ");
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log("A Conta foi adicionada!");
  }

  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta !== null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;

      console.log(`A conta número ${conta.numero} foi atualizada com êxito`);
    } else console.log("\nConta nao foi encontrada! ");
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(`A conta número ${numero} foi excluida com êxito`);
    } else console.log("\nConta nao foi encontrada! ");
  }

  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  public gerarNumero(): number {
    return this.numero++;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }
}
