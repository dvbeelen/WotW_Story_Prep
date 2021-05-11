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
    this.cutStringsFromInput(event.target[1].value, 0)
    this.convertAndDownloadJSON()
    console.log(this.textObject)
  }

  cutStringsFromInput(text, sentenceCount){
    console.log(text.length)
    let sentence = text.split(".")[0]
    text.substring(sentence.length)
    let cutText = text.substring(sentence.length + 2)
    // sentence = sentence + "."
    this.textObject.text[sentenceCount] = sentence
    if (cutText.length > 0) {
      this.cutStringsFromInput(cutText, sentenceCount += 1)
    }    
  }

  convertAndDownloadJSON(){
    let filename = "export.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(this.textObject)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(this.textObject));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }


  render() {
    return (
      <div class="App">
        <h2>StoryPrep</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="title">Put your title here: </label></td>
                <td><input type="text" id="title"></input></td>
              </tr>
              <tr>
                <td><label htmlFor="textInput">And put your story here: </label></td>
                <td><input id="textInput" type="textarea" name="textValue"/></td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Get your prepped story"></input>
        </form>
      </div>
    );
  }
}

export default App;