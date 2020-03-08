import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public tarefas: Array<Todo>;
  public task: FormControl;

  constructor(private todosService: TodosService) {
    this.task = new FormControl('', Validators.required);
  }

  ngOnInit() {
    this.todosService.listar().subscribe(res => this.tarefas = res);
  }

  adicionar() {
    this.tarefas.push(this.task.value);
    this.task.setValue('');
  }
}
