import { useState } from "react";

import Button from "../Components/Button";
import useLocalStorage from "../hooks/useLocalStorage";

const initialTodos = [
  {
    id: 1,
    text: "Learn React components",
    done: true
  },
  {
    id: 2,
    text: "Learn props and state",
    done: false
  },
  {
    id: 3,
    text: "Practice React Router",
    done: false
  },
  {
    id: 4,
    text: "Deploy React project",
    done: false
  }
];

function Todo() {

  const [todos, setTodos] =
    useLocalStorage(
      "todos",
      initialTodos
    );

  const [text, setText] =
    useState("");

  function addTodo(event) {

    event.preventDefault();

    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        done: false
      }
    ]);

    setText("");
  }

  function toggleTodo(id) {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done
            }
          : todo
      )
    );

  }

  return (
    <section>

      <div className="page-heading">

        <span className="badge">
          useState + Custom Hook
        </span>

        <h1>
          To-do List
        </h1>

      </div>

      <form
        className="todo-form"
        onSubmit={addTodo}
      >

        <input
          value={text}
          onChange={(event) =>
            setText(event.target.value)
          }
          placeholder="Enter a task"
        />

        <Button type="submit">
          Add Task
        </Button>

      </form>

      <div className="card">

        {todos.map((todo) => (

          <label
            className={
              `todo-item ${
                todo.done ? "done" : ""
              }`
            }
            key={todo.id}
          >

            <input
              type="checkbox"
              checked={todo.done}
              onChange={() =>
                toggleTodo(todo.id)
              }
            />

            <span>
              {todo.text}
            </span>

          </label>

        ))}

      </div>

    </section>
  );
}

export default Todo;