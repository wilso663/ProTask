import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/_models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
