import React from "react";

class OpeningSlide extends React.Component {render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <label htmlFor="title"><b>Get your story in the game!</b></label>
        <p>
          You can use this tool to convert written text of any kind into a JSON file. <br></br>
          Sentence are made by breaking at points (.), question marks (?) and exclamation marks (!). <br></br>
          You can use your prepped text / story for use in the Writing On The Wall plug-in for Godot. 
        </p>
      </div>
    )}
}

export default OpeningSlide
