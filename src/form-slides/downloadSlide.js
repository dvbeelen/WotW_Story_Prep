import React from "react";

class DownloadSlide extends React.Component {render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <label htmlFor="title"><b>Done and done!</b></label>
        <input 
          className="form-control"
          id="download"
          name="download"
          type="submit"
          placeholder="Download your prepped story!"
          value="Download your prepped story!"
        />
      </div>
    )}
}

export default DownloadSlide
