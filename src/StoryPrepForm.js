import './StoryPrepForm.css';
import React from 'react'
import TitleSlide from './form-slides/titleSlide'
import AuthorSlide from './form-slides/authorSlide'
import TextSlide from './form-slides/textSlide'
import DownloadSlide from './form-slides/downloadSlide';
import OpeningSlide from './form-slides/openingSlide';

class StoryPrepForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
      }
    }

    textObject = {
        title: "",
        author: "",
        text: {}
    }
  
    handleChange = event => {
      const {name, value} = event.target
      if (name === 'text'){
        this.cutStringsFromInput(value, 0) 
      } else {
        this.textObject[name] = value 
      }  
    }

    cutStringsFromInput(text, sentenceCount){
        let sentence = text.split(/(?<=[.?!])/)[0]
        text.substring(sentence.length)
        let cutText = text.substring(sentence.length)
        // sentence = sentence + "."
        this.textObject.text[sentenceCount] = sentence.trim()
        if (cutText.length > 0) {
          this.cutStringsFromInput(cutText, sentenceCount += 1)
        }  
      }
     
    handleSubmit = event => {
      event.preventDefault()
      let filename = `${this.textObject.title}.json`;
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
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 4? 5: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="previousButton" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <5){
      return (
        <button 
          className="nextButton" 
          type="button" onClick={this._next}>
            Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <div className="heading">
            <img alt="Logo" src={process.env.PUBLIC_URL+ '/WotW_icon_big.png'}/>
            <h1>Story Prep</h1>
        </div>
        <div className="form">
            <form onSubmit={this.handleSubmit}>
            {/* 
            render the form steps and pass required props in
            */}
            <OpeningSlide
                currentStep={this.state.currentStep} 
            />
            <TitleSlide 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                email={this.state.email}
            />
            <AuthorSlide 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username}
            />
            <TextSlide 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
            />
            <DownloadSlide
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
            />

            <div className="navButtons">
                {this.previousButton()}
                {this.nextButton()}
            </div>

            </form>
        </div> 
        </React.Fragment>
      );
    }
}

export default StoryPrepForm