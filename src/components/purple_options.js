import React from 'react';

const PurpleOptions = props => {
  <div>
    <input
      type="radio"
      id="contactChoice1"
      value="option1"
      checked={this.state.selectedOption === 'option1'}
      onChange={this.handleOptionChange}
      onClick={event => this.setState({ chamber: 'senate' })}
    />
    <label>Senate</label>
    <input
      type="radio"
      id="contactChoice2"
      value="option2"
      checked={this.state.selectedOption === 'option2'}
      onChange={this.handleOptionChange}
      onClick={event => this.setState({ chamber: 'house' })}
    />
    <label>House</label>
    <br />
    <button id="js-get-info" onClick={() => this.getData()}>
      get-info
    </button>
    <textarea name="" id="js-show-info" cols="30" rows="10" />
  </div>;
};

export default PurpleOptions;
