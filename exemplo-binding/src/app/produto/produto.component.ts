import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // variável
  titulo: string = "Apex-ensino";
  texto: string = "Aprendendo Angular";
  url: string = "http://apexensino.com.br";
  imagem: string = "https://picsum.photos/150/70";

  campo: string = "Apex";
  gostandoDeAngular: boolean = true;
  cor: string = "vermelho";
  numero: number = 3;

  numeros: number[] = [1,2,3,4,5,6,7,8,9];
  cidades: string[] = ["Florianópolis", "São José", "Palhoça", "Biguaçu", "Rio Vermelho"];
  fonte: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  alterarNumero(event): void {
    this.numero = event.target.value;
  }

  avisar(): void {
    alert("Seja bem vindo! " + this.campo)
  }

}
