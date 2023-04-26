import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TodoItem } from './_models/todo-item';
import { TodoItemService } from './_services/todo-item.service';
import { distinctUntilChanged, pipe, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'ProTask';
  users: any;
  selectedTheme?: string;
  themeIconUrl: string;
  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';

  readonly breakpoint$ = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, '(min-width: 376px)']).pipe(
    distinctUntilChanged()
  );

  constructor(private http: HttpClient, 
    private todoItemServce: TodoItemService,
    private breakpointObserver: BreakpointObserver
  ){ 
    this.themeIconUrl = '../assets/images/icon-sun.svg';
  }

  ngOnInit(): void {
    this.http.get("https://localhost:7283/api/users").subscribe({
      next: response => this.users = response,
      error: (err) => {console.log(err)},
      complete: () => {} 
    });
    this.selectedTheme = 'dark-theme';
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged());
  }

  private breakpointChanged(): void {
    if(this.breakpointObserver.isMatched('(min-width: 376px)')){
      this.currentBreakpoint = '(min-width: 376px)';
    } else {
      this.currentBreakpoint = '';
    }
  }

  switchTheme(): void {
    if(this.selectedTheme === 'dark-theme') {
      this.selectedTheme = 'light-theme';
      this.themeIconUrl = '../assets/images/icon-moon.svg';
    } else {
      this.selectedTheme = 'dark-theme';
      this.themeIconUrl = '../assets/images/icon-sun.svg';
    }
  }

}

