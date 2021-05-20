import React from "react";

class TextSlide extends React.Component {render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <label htmlFor="title"><b>Time to get the story prepared!</b></label>
        <textarea 
          className="form-control"
          id="text"
          name="text"
          type="text"
          placeholder="Put your story here!"
          value={this.props.text} 
          onChange={this.props.handleChange}
        />
      </div>
    )}
}

export default TextSlide