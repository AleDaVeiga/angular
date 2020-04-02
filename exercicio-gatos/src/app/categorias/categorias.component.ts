import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.listar().subscribe(resp => this.categorias = resp);
  }

}
