import './StoryPrepForm.css';
import React from 'react'
import TitleSlide from './form-slides/titleSlide'
import AuthorSlide from './form-slides/authorSlide'
import TextSlide from './form-slides/textSlide'

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
      console.log(name)
      console.log(this.textObject)
    }

    handleTextChange = event => {
        const {name, value} = event.target
        this.cutStringsFromInput(value, 0) 
    }

    cutStringsFromInput(text, sentenceCount){
        let sentence = text.split(".")[0]
        text.substring(sentence.length)
        let cutText = text.substring(sentence.length + 2)
        // sentence = sentence + "."
        this.textObject.text[sentenceCount] = sentence.trim()
        if (cutText.length > 0) {
          this.cutStringsFromInput(cutText, sentenceCount += 1)
        }    
      }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
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
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
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
            <p>Step {this.state.currentStep} </p>
            <form onSubmit={this.handleSubmit}>
            {/* 
            render the form steps and pass required props in
            */}
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
                password={this.state.password}
            />
            {this.previousButton()}
            {this.nextButton()}
    
            </form>
        </div> 
        </React.Fragment>
      );
    }
}

export default StoryPrepForm