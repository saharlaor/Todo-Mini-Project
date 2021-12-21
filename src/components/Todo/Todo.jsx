import React from "react";
import "./Todo.css";

function Todo({ id, content }) {
  return <div className="Todo">{content}</div>;
}

export default Todo;
