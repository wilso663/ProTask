import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './_models/todo-item';
import { TodoItemService } from './_services/todo-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProTask';
  users: any;

  constructor(private http: HttpClient, private todoItemServce: TodoItemService){ }

  ngOnInit(): void {
    this.http.get("https://localhost:7283/api/users").subscribe({
      next: response => this.users = response,
      error: (err) => {console.log(err)},
      complete: () => {} 
    });
  }


}
