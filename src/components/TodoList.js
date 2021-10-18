import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleDone, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
