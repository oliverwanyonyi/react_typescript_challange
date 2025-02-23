import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}
const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const completeTodo = (task: Todo) => {
    if(!task.completed){
    const updatedTodos = todos.map((todo) =>
      todo.id === task.id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
}
  };
  return (
    <div>
      <h2>Todo List</h2>

      <button onClick={() => addTodo("New Todo")}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => completeTodo(todo)}>
            {" "}
            {todo.task}({todo.completed ? "Completed" : "Pending"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
