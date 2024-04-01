import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Cores"
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
    let buscaConta = this.buscarNoArray(numero);
    
    if(buscaConta !== null) {
      if(buscaConta.saldo >= valor ) {
        buscaConta.sacar(valor);
        console.log(`Saque de R$${valor} efetuado com sucesso!`);
      }
      console.log("Impossivel fazer o saque!")
    }
    console.log("Conta não encontrada!")
  }

  depositar(numero: number, valor: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      buscaConta.depositar(valor);
      console.log(colors.fg.green, `\nDeposito de R$${valor} efetuado com sucesso na conta: ${numero} !`, colors.reset);
    }
    else {
      console.log(colors.fg.red, `\nA conta numero: ${numero} não foi encontrada! `, colors.reset);
    }
  }
   
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem)
    let contaDestino = this.buscarNoArray(numeroDestino)

    if(contaDestino !== null && contaOrigem !== null) {
      if(contaOrigem.sacar(valor) == true) {
        contaDestino.depositar(valor)
        console.log(colors.fg.green, `\nA Transferencia da Conta Numero: ${numeroOrigem} para a conta: ${numeroDestino} foi efetuada com sucesso! `, colors.reset)
      }
    }
    else {
      console.log(colors.fg.red, `A Conta Numero: ${contaOrigem} e/ou a Conta Numero: ${contaDestino} não foram encontradas! `, colors.reset)
    }
  }

  public gerarNumero(): number {
    return ++ this.numero;
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
