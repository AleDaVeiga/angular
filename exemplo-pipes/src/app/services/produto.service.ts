import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url: string = "http://localhost:3001/produtos";

  constructor(private http: HttpClient) { }

  public listar(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
