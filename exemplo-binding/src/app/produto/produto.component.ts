import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
