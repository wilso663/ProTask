import { Component } from '@angular/core';
import { TodoItem } from './_models/todo-item';
import { TodoItemService } from './_services/todo-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProTask';

  constructor(private todoItemServce: TodoItemService){ }


}
