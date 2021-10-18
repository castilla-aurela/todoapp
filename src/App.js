import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) =>{
    setTodos([...todos,newTodo]);
  }


  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            is_done: !todo.is_done,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeDoneTodos = () => {
    setTodos(todos.filter((todo) => !todo.is_done));
  };


  const markAllDone = () => {
    setTodos(todos.map((todo) => ({ ...todo, is_done: true })));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo}/>
      <button onClick={removeDoneTodos}>Remove Done</button>
      <button onClick={markAllDone}>Mark All Done</button>
      <TodoList todos={todos} toggleDone={toggleDone} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
