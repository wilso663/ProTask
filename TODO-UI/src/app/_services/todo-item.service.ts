import { Injectable } from '@angular/core';
import { TodoItem } from '../_models/todo-item';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  todos : TodoItem[] = [];

  constructor(private http: HttpClient) { }

}
