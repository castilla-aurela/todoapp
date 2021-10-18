import React, { useState } from 'react'

function NewTodoForm({addTodo}) {
    const [newTodo, setNewTodo] = useState("");

    const updateNewTodo = (event) => {
        setNewTodo(event.target.value);
      };

      const formSubmitted = (event) => {
        event.preventDefault();
        console.log("FORM WAS SUBMITTED");
        console.log(newTodo);
        addTodo({
            id: Date.now(),
            title: newTodo,
            is_done: false,
          })
        setNewTodo("");
      };

    return (
        <form onSubmit={formSubmitted}>
        <label htmlFor="">New Todo</label>
        <input onChange={updateNewTodo} id="newTodo" value={newTodo} />
        <button>Add Todo</button>
      </form>
    )
}

export default NewTodoForm