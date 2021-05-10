import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <label>Enter value : </label>
          <input
            id="textInput" 
            type="textarea" 
            name="textValue"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;