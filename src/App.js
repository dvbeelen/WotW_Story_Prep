import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  textObject = {
    title: "",
    text: {}
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.textObject.title = event.target[0].value
    this.cutStringsFromInput(event.target[1].value)
    console.log(this.textObject)
  }

  cutStringsFromInput(text){
    let sentenceCount = 0
    while (text.length >= 0){
      let sentence = text.split(". ")[0]
      text.replace(sentence, "")
      this.textObject.text[sentenceCount] = sentence
    }
  }
  render() {
    return (
      <div>
        <h2>StoryPrep</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="title">Text title: </label></td>
                <td><input type="text" id="title"></input></td>
              </tr>
              <tr>
                <td><label htmlFor="textInput">Enter value: </label></td>
                <td><input id="textInput" type="textarea" name="textValue"/></td>
              </tr>
            </tbody>
          </table>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;