import React from "react";
import { v4 as uuid } from "uuid";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  handleCreateTodo = (text) => {
    this.setState((prevState) => {
      return { todos: [...prevState.todos, { id: uuid(), content: text }] };
    });
  };

  updateHandler = (id, text) => {
    const todosCopy = [...this.state.todos];
    const todoObj = todosCopy.find((todo) => todo.id === id);
    todoObj.content = text;
    this.setState({ todos: todosCopy });
  };

  generateTodos() {
    return this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          updateHandler={this.updateHandler}
        />
      );
    });
  }

  render() {
    return (
      <div className="TodoList">
        <Input clickHandler={this.handleCreateTodo} />
        <div className="TodoList__todos">{this.generateTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
