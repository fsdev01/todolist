import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const TODO_KEY = "todoList";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect - after render (first time or re-render)
  // (no dependency)
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem(TODO_KEY));
    // Check if there are list of items
    if (todoList) {
      setTodos(todoList);
    }
  }, []);

  // Dependent if todos list changes - add/remove item
  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  // Add task to list
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  // Remove task from list
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Mark task as completed
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo List </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
