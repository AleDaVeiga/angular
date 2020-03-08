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
}
