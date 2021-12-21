import React from "react";
import { v4 as uuid } from "uuid";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    todos: [
      { content: "wow" },
      { content: "react" },
      { content: "rcdsa" },
      { content: "asdf" },
      { content: "react" },
      { content: "rcdsa" },
      { content: "asdf" },
      { content: "react" },
      { content: "rcdsa" },
      { content: "asdf" },
    ],
  };

  handleCreateTodo = (text) => {
    this.setState((prevState) => {
      return { todos: [...prevState.todos, { content: text }] };
    });
  };

  generateTodos() {
    return this.state.todos.map((todo) => {
      const id = uuid();
      return <Todo key={id} id={id} content={todo.content} />;
    });
  }

  render() {
    return (
      <div className="TodoList">
        <Input createHandler={this.handleCreateTodo} />
        <div className="TodoList__todos">{this.generateTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
