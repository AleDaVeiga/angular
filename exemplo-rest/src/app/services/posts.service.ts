import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  public listar(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  public buscarPorId(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`);
  }
  
  public adicionar(postagem: Post): Observable<Post> {
    return this.http.post<Post>(this.url, postagem);
  }
  
  public atualizar(postagem: Post): Observable<Post> {
    return this.http.put<Post>(`${this.url}/${postagem.id}`, postagem);
  }
  
  public remover(postagem: Post): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${postagem.id}`);
  }
}
