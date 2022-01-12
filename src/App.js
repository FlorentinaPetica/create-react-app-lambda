// import React, { Component } from "react"
// import logo from "./logo.svg"
// import "./App.css"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <LambdaDemo />
//         </header>
//       </div>
//     )
//   }
// }

// export default App

import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Timer from "./Components/Timer";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const nowDate = new Date();

  useEffect(() => {
    getTodos();
    async function getTodos() {
      const res = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      );
      const data = await res.json();
      setTodos(data);
      setLoading(false);
    }
  }, [setTodos]);

  const addTodo = (todo) => {
    // adds new todo to beginning of todos array
    if (!todo.description || !todo.deadline) {
      alert("Please add description and deadline");
    }
    // check luxon
    else if (new Date(todo.deadline) < nowDate) {
      alert("This date is in the past");
    } else {
      setTodos([todo, ...todos]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Your Todo List</h1>
      <Timer />
      <TodoForm addTodo={addTodo} />
      {loading ? (
        "...loading"
      ) : (
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      )}
    </div>
  );
};

export default App;

