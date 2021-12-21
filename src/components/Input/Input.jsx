import React from "react";
import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    this.props.createHandler(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    console.log(this.state.value);
    return (
      <div className="Input">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Input;
