import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url: string = "https://evening-stream-42490.herokuapp.com/api/todos";

  constructor(private http: HttpClient) { }

  public listar(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
  
  public adicionar(tarefa: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, tarefa);
  }
  
  public atualizar(tarefa: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${tarefa._id}`, tarefa);
  }
  
  public remover(tarefa: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${tarefa._id}`);
  }
}
