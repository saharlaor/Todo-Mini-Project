import React from "react";
import Input from "../Input/Input";
import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      content: this.props.content,
    };
  }

  handleUpdate = (text) => {
    this.props.updateHandler(this.state.id, text);
    this.setState({ content: text });
  };

  render() {
    return (
      <div className="Todo">
        {this.state.content}
        <Input clickHandler={this.handleUpdate} />
        <button onClick={() => this.props.deleteHandler(this.state.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
