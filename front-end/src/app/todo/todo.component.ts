import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  labelCreateUpdate: String;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }


  saveTodo() {
    if (this.id === -1) {
      // create new Todo
      this.labelCreateUpdate = 'Save';
      this.todoService.saveTodo('misdagbo', this.todo).subscribe(
        data => console.log('Creaated new todo : ', data)
      );
    } else {
      this.labelCreateUpdate = 'Update';
      this.todoService.updateTodo('misdagbo', this.id, this.todo).subscribe(
        data => {
          console.log('Update todo info : ', data);
          this.router.navigate(['todos']);
        }
      );
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // this.labelCreateUpdate = this.route.snapshot.params['labelCreateUpdate'];
    this.todo = new Todo(this.id, '', false, new Date());
    // tslint:disable-next-line:triple-equals
    if (this.id != -1) {
      this.todoService.retrieveTodo('misdagbo', this.id).subscribe(
        data => {
          this.todo = data;
          console.log('Todo for update : ', this.todo);
        }
      );
    }
  }

}
