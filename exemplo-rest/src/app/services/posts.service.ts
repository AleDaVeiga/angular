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
}
