import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  // Mark item as completed
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  // Remove item from list
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={handleCheckboxClick}
      />
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
          listStyleType: "none",
        }}
      >
        {" "}
        {todo.task} <button onClick={handleRemoveClick}>X</button>
      </li>
    </div>
  );
}
export default Todo;
