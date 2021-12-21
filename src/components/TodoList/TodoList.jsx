import React from "react";
import Input from "Input";
import Todo from "Todo";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  generateTodos() {
    return this.state.todos.map((todo) => {
      return <Todo content={todo.content} />;
    });
  }

  render() {
    return (
      <div className="TodoList">
        <Input />
        {this.generateTodos()}
      </div>
    );
  }
}

export default TodoList;
