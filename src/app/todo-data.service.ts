import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {
 todos: Todo[] = []
  lastId: number = 0
 
 check(todo){
   console.log('fsdfdsf')
   console.log('from service' , todo);
 }
 
 addTodo(todo: Todo): TodoDataService{
   if(!todo.id){
      todo.id = ++this.lastId;
   }
   this.todos.push(todo);
   console.log('added from services ' , this.todos);
   return this
 }
 
 toggleTodoComplete(todo){
     var item = this.todos.find((item)=>{
       return item.id == todo.id
    });
    item.complete = !item.complete
    console.log('toggle todo from srvice');
  }
  
   removeTodo(todo){
    this.todos = this.todos.filter((item)=>{
      return item.id != todo.id
    })
    console.log('item deleted from service')
  }
  
   getAllTodos(): Todo[] {
    return this.todos;
  }
 

}