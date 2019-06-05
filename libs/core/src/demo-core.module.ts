import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {MyComponentComponent} from './my-component/my-component.component';
import { TodoReducer } from './todo';
import { TodoInitialState } from './todo/todo.reducer';
import { FilterReducer } from './filter';
import { initialState } from './filter/filter.reducer';
import { VisibleTodosPipe } from './visibleTodosPipe';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('todos', TodoReducer, {initialState: TodoInitialState}),
        StoreModule.forFeature('currentFilter', FilterReducer, {initialState: initialState}),
    ],
    declarations: [MyComponentComponent],
    exports: [MyComponentComponent]
})
export class DemoCoreModule {
}
