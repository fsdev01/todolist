import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    // prevent default submit button
    e.preventDefault();

    // trim the content
    if (todo.task.trim()) {
      // Add the task to the list with new id
      addTodo({ ...todo, id: uuidv4() });
      // reset input box
      //setTodo({ id: "", task: "", completed: false });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        onChange={handleInputChange}
        value={todo.task}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
