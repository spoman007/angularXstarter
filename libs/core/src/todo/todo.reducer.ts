import { Todo, Todos } from './todo.model';
import { TodoActions, TodoActionTypes } from './todo.actions';

export const TodoInitialState: Array<Todo> = [];
export const TodoReducer = (state = TodoInitialState, action: TodoActions): Array<Todo> => {
  switch (action.type) {
    case TodoActionTypes.AddTodo: 
      return state.concat(<Todo>{
          id: action.payload.id,
          text: action.payload.text,
          completed: action.payload.completed
        });
    case TodoActionTypes.ToggleTodo:
      return toggleTodo(state, action);
    case TodoActionTypes.DeleteTodo:
      return state.filter(todo => todo.id != action.payload.id);
    default:
      return state;
  }
}; 

function toggleTodo(todos, action){
  //map returns new array
  return todos.map(todo => {
    //skip other items
    if (todo.id !== action.payload.id)
      return todo;
    //toggle
    return {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed
    };
  });
}