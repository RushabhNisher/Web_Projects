import { Component, OnInit } from '@angular/core';
import { TodoList } from './app';
import { AppServices } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: TodoList[];
  public todo: TodoList;
  listTitle: string = '';
  todoItems: string = '';
  author: string = '';
  date: string = '';
  isValid: false;

  constructor(private appServices: AppServices) { }
  title = 'angular-todo-list';
  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.appServices.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  onClickMe() {
   this.validation();
   if (this.isValid) {
    this.todo = new TodoList();
    this.todo.title = this.listTitle;
    this.todo.todoitem = this.todoItems;
    this.todo.author = this.author;
    this.todo.date = this.date;
    this.todos.push(this.todo);
    this.clearText();
   }
  }
  clearText() {
    this.listTitle = '';
    this.todoItems = '';
    this.author = '';
    this.date = '';
  }

  validation() {
    if (this.listTitle === '') {
      alert('please add title');
      this.isValid = false;
    } else if (this.todoItems === '') {
      alert('please add todo items');
      this.isValid = false;
      } else if (this.author === '') {
        alert('please add author');
        this.isValid = false;
      } else if (this.date === '') {
        alert('please add date');
        this.isValid = false;
      }
      else{
        this.isValid = true;
      }

  }

}
