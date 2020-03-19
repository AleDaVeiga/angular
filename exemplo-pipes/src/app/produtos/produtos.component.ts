import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any[];

  constructor(private produtosService: ProdutoService) { }

  ngOnInit(): void {
    this.produtosService.listar().subscribe(res => this.produtos = res);
  }
}
