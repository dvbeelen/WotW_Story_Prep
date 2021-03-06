import React from "react";

class DownloadSlide extends React.Component {render() {
    if (this.props.currentStep !== 5) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <label htmlFor="title"><b>Done and done!</b></label>
        <p>Click the button below to download your prepped story! <br></br> This might take a little while (depending on the length of your story), so be patient!</p>
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
