import { Component, HostBinding } from '@angular/core';

import { TodoActions, FilterActions } from '@ngrx-demo/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Todo } from '@ngrx-demo/core/src/todo/todo.model';

@Component({
    selector: 'ngrx-demo-web',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @HostBinding('attr.class') class = 'mx-auto';

    todos$: Observable<Array<Todo>>
    currentFilter: string;
    constructor(private store: Store<AppState>) {
        this.todos$ = this.store.pipe(select('todos'));
        this.store.pipe(select('currentFilter')).subscribe(filter => this.currentFilter = filter);
    }


    addTodo(input: { value: string; }) {
        if (input.value.length === 0) return;
        this.store.dispatch(
            new TodoActions.AddTodo(
                <Todo>{ text: input.value, completed: false }
            )
        );
        input.value = '';
    }

    removeTodo(id: number) {
        this.store.dispatch(
            new TodoActions.DeleteTodo({ id })
        );
    }

    onTodoClick(id: number) {
        this.store.dispatch(
            new TodoActions.ToggleTodo({ id })
        );
    }

    applyFilter(filter: string) {
        this.store.dispatch(
            new FilterActions.SetCurrentFilter({ filter })
        );
    }
}
