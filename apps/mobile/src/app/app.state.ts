import { Todo } from '@ngrx-demo/core/src/todo/todo.model';

export interface AppState {
    readonly todos: Array<Todo>;
    readonly currentFilter: string;
}
