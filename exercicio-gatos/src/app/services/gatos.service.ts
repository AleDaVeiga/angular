import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatosService {
  private url: string = "https://api.thecatapi.com/v1/images/search";
  //https://docs.thecatapi.com/api-reference/images/images-search

  constructor(private http: HttpClient) { }

  public listar(categoriaId: string): Observable<any[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('limit', '10');
    params = params.append('category_ids', categoriaId);
    return this.http.get<any[]>(this.url, { params });
  }
}
