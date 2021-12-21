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
    this.props.clickHandler(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="Input">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default Input;
