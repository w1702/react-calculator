import React, { Component } from "react";
import Button from "./button";

class ButtonPanel extends Component {
  state = {};

  render() {
  const { buttons, onKeyPress } = this.props;
    return (
      <div>
      {buttons.map(button => (
        <Button
          key={button.id}
          value={button.value}
          onKeyPress = {onKeyPress}
        />
      ))}
      </div>
      // loop through buttons
      // each row must have 4 buttons
    );
  }

  arrangeButtons(list, numOfCols){
    while(list.length > 0){
        let row = list.splice(0, numOfCols);
        row.forEach(e => {
            document.write(e + " ");
        });
        document.write("<br>");
    }
  }
}

export default ButtonPanel;
