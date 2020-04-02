import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatosService } from '../services/gatos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  gatos: any[];

  constructor(private gatosService: GatosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.gatosService.listar(params['id']).subscribe(resp => this.gatos = resp);
    });    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
