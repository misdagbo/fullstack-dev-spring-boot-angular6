import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { URL_API } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private _http: HttpClient
  ) { }

  retrieveAllTodos(username: String) {
    return this._http.get<Todo[]>(`${URL_API}/users/${username}/todos`);
    // console.log('Execute Hello World Bean Service');
  }

  deleteTodo(username, id) {
    return this._http.delete<Todo[]>(`${URL_API}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this._http.get<Todo>(`${URL_API}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this._http.put(`${URL_API}/users/${username}/todos/${id}`, todo);
  }

  saveTodo(username, todo) {
    return this._http.post(`${URL_API}/users/${username}/todos`, todo);
  }

  // Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at
  // http://localhost:8090/users/misdagbo/todos. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).
}
