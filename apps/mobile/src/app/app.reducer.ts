import {TodoReducer, FilterReducer} from '@ngrx-demo/core';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app.state'

export const reducers: ActionReducerMap<AppState> = {
    todos: TodoReducer,
    currentFilter: FilterReducer
};
