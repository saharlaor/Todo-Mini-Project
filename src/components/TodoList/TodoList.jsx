import React from "react";
import { v4 as uuid } from "uuid";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  handleCreateTodo(text) {
    return;
  }

  generateTodos() {
    return this.state.todos.map((todo) => {
      return <Todo content={todo.content} />;
    });
  }

  render() {
    return (
      <div className="TodoList">
        <Input createHandler={this.handleCreateTodo} />
        {this.generateTodos()}
      </div>
    );
  }
}

export default TodoList;
