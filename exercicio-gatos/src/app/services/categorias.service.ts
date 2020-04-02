import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private url: string = "https://api.thecatapi.com/v1/categories";
  //https://docs.thecatapi.com/api-reference/images/images-search

  constructor(private http: HttpClient) { }

  public listar(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
