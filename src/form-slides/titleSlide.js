import React from "react";

class TitleSlide extends React.Component {render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <label htmlFor="title"><b>What's your story's title?</b></label>
        <input 
          className="form-control"
          id="title"
          name="title"
          type="text"
          placeholder="Think of a good title for your story and put it here!"
          value={this.props.title} 
          onChange={this.props.handleChange}
        />
      </div>
    )}
}

export default TitleSlide