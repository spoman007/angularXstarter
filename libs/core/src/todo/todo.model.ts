export interface Todo {
    id: number;
    completed: boolean;
    text: string;  
  }
  
  export interface Todos {
    todos: Array<Todo>;
  }
  