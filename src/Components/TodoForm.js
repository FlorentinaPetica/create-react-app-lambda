import React, { useState } from "react";
import {MdOutlineAddToPhotos} from 'react-icons/md'
import uuid from 'react-uuid'

const TodoForm = ({ addTodo }) => {
    // const randomId = Math.floor(Math.random() * 10000)
    const [todo, setTodo] = useState({
    id: "",
    description: "",
    deadline: "",
    completed: false
  });


  const handleDescriptionInputChange = (e) => {
    // e.target.value contains new input from onChange
    setTodo({ ...todo, description: e.target.value });
  }

  const handleDeadlineInputChange = (e) => {
    // e.target.value contains new input from onChange
    setTodo({ ...todo, deadline: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser refresh
    if (todo.description.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, description: "", deadline: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        label="Task"
        type="text"
        name="task"
        value={todo.description}
        onChange={handleDescriptionInputChange}
        style={{height: '20px'}}
      ></input>
      <input
        label="Deadline"
        type="date"
        name="deadline"
        value={todo.deadline}
        onChange={handleDeadlineInputChange}
        style={{height: '20px'}}
      ></input>
      <button type="submit">< MdOutlineAddToPhotos style={{fontSize: '20px', verticalAlign: 'text-bottom'}}/></button>
    </form>
  );
}

export default TodoForm;