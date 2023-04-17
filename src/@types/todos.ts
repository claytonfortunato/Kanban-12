type TodoStatus = "todo" | "working" | "done";

export interface Todo {
  id: number;
  description: string;
  status: TodoStatus;
  tags: string[];
  title: string;
}

export type Todos = Record<TodoStatus, Todo[]>;
