import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: String;

  constructor(private _todoDataService: TodoDataService, private route: Router) {
    // this.todos = [
    //   new Todo(1, 'MIS DAGBO', false, new Date),
    //   new Todo(1, 'MIS DAGBO', false, new Date),
    //   new Todo(1, 'MIS DAGBO', false, new Date),
    //   new Todo(1, 'MIS DAGBO', false, new Date),
    //   new Todo(1, 'MIS DAGBO', false, new Date)
    // ];
    // console.log(this.todos);
  }


  RefreshTodos() {
    this._todoDataService.retrieveAllTodos('misdagbo').subscribe(
      response => {
        console.log('Todos : ', response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this._todoDataService.deleteTodo('misdagbo', id).subscribe(
      response => {
        console.log('New List Todo : ', response);
        // this.todos = response;
        this.message = `Delete of todo ${id} successful`;
        this.RefreshTodos();
      }
    );
    // console.log('Delete todo ID : ', id);
  }

  updateTodo(id) {

    // console.log(`Update todo ${id}`);
    this.route.navigate(['todos', id]);
  }

  addTodo() {
    this.route.navigate(['todos', -1]);
  }


  ngOnInit() {
    this.RefreshTodos();
  }

}
