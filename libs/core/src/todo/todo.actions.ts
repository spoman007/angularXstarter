import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export enum TodoActionTypes {
    AddTodo = '[Todo] Add Todo',
    ToggleTodo = '[Todo] Toggle Todo',
    DeleteTodo = '[Todo] Delete Todo',
}

let currentId = 1;

export class AddTodo implements Action {
    readonly type = TodoActionTypes.AddTodo;
    id: number;

    constructor(public payload: Todo) {
        payload.id = currentId++;
    }
}

export class ToggleTodo implements Action {
    readonly type = TodoActionTypes.ToggleTodo;

    constructor(public payload: { id: number }) { }
}

export class DeleteTodo implements Action {
    readonly type = TodoActionTypes.DeleteTodo;

    constructor(public payload: { id: number }) { }
}


export type TodoActions = AddTodo | ToggleTodo | DeleteTodo;
