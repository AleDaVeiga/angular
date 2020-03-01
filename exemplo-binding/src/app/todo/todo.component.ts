import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  public tarefas: Array<string>;
  public task: FormControl;

  constructor() {
    this.task = new FormControl('', Validators.required);
  }

  ngOnInit() {
    this.tarefas = [];
  }

  adicionar() {
    this.tarefas.push(this.task.value);
    this.task.setValue('');
  }
}
