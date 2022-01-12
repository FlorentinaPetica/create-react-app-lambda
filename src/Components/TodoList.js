import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
  if (todos.length === 0) {
    return <h1>No items</h1>;
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            className="TodoListItem"
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
