import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
        <button 
            value={this.props.value}
            onClick={() => this.props.onKeyPress(this.props.value)}
        >
            {/** Generate text of each button from it's value */}
            {this.props.value}
        </button>
    );
  }
}

export default Button;
