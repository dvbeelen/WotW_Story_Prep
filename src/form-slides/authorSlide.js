import React from "react";

class AuthorSlide extends React.Component {render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <label htmlFor="title"><b>Who wrote your story?</b></label>
        <input 
          className="form-control"
          id="author"
          name="author"
          type="text"
          placeholder="Give credit to the author of your story (or to yourself)!"
          value={this.props.author} 
          onChange={this.props.handleChange}
        />
      </div>
    )}
}

export default AuthorSlide
