import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public tarefas: Array<Todo>;
  public task: FormGroup;

  constructor(private todosService: TodosService) {
    this.novoFormTarefa();
  }

  ngOnInit() {
    this.todosService.listar().subscribe(res => this.tarefas = res);
  }

  private novoFormTarefa() {
    this.task = new FormGroup({
      _id: new FormControl(),
      description: new FormControl('', Validators.required),
      done: new FormControl('true')
    });
  }

  public adicionar() {
    this.todosService.adicionar(this.task.value).subscribe(
      res => {
        this.tarefas.push(res);
        this.editar({ _id: null, description: '', done: false });
      }
    );
  }

  public editar(tarefa: Todo) {
    this.task.patchValue(tarefa);
  }

  public atualizar() {
    this.todosService.atualizar(this.task.value).subscribe(
      res => {
        let tarefaEditada = this.tarefas.find((t: Todo) => t._id == this.task.get("_id").value);
        if (tarefaEditada) {
          Object.assign(tarefaEditada, res);
        } else {
          this.tarefas.push(res);
        }
      }
    );
  }

  public remover(tarefa: Todo) {
    this.todosService.remover(tarefa).subscribe(
      res => {
        this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
      }
    );
  }
}
