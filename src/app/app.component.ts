import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor( private todoDataService: TodoDataService){
    console.log(todoDataService)
  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);

    this.newTodo = new Todo();
  }
  
  toggleTodoComplete(todo){
      this.todoDataService.toggleTodoComplete(todo);
    console.log('toggle todo');
  }
  
  removeTodo(todo){
    this.todoDataService.removeTodo(todo);
  
    console.log('item deleted')
  }
  
   get todos() {
    return this.todoDataService.getAllTodos();
  }



}