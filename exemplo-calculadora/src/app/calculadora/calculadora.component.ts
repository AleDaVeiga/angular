import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private tela: string;
  private limparTela: boolean;
  private operacao: string;
  private valores: number[];
  private posicao: number;

  constructor() { }

  ngOnInit(): void {
    this.limparMemoria();
  }

  public limparMemoria(): void {
    this.tela = '0';
    this.limparTela = false;
    this.operacao = null;
    this.valores = [0, 0];
    this.posicao = 0;
  }

  public getTela(): string {
    return this.tela;
  }

  public adicionarOperacao(op: string) {
    if (this.posicao == 0) {
      this.limparTela = true;
      this.operacao = op;
      this.posicao = 1;
    } else {
      const opNew = this.operacao;
      const vals = [...this.valores];
      
      try {
        this.valores[0] = eval(`${vals[0]} ${opNew} ${vals[1]}`);
      } catch (e) {
        this.valores[0] = vals[0];
      }
      this.valores[1] = 0;
      this.operacao = op;
      this.posicao = 1;

      this.tela = this.valores[0].toString();
      this.limparTela = true;
    }
    console.log(`Valores: ${this.valores} Operacao: ${this.operacao}`);
  }

  public adicionarDigito(dg: string) {
    if (dg === '.' && this.tela.includes('.')) {
      return;
    }
    const valorAtual = this.tela === '0' || this.limparTela ? '' : this.tela;

    this.tela = valorAtual + dg;
    this.limparTela = false;
    this.valores[this.posicao] = parseFloat(this.tela);

    console.log(`Valores: ${this.valores} Operacao: ${this.operacao}`);
  }
}
