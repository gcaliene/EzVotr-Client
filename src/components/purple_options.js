import React, { Component } from 'react';

class PurpleOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chamber: 'senate'
    };
    this.onRadioSelection = this.onRadioSelection.bind(this);
  }

  onRadioSelection(changeEvent) {
    console.log(changeEvent.target.value);
    // console.log(this);
    this.setState({
      chamber: changeEvent.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          id="contactChoice1"
          value="senate"
          checked={this.state.chamber === 'senate'}
          onChange={this.onRadioSelection}
        />
        <label>Senate</label>
        <input
          type="radio"
          id="contactChoice2"
          value="house"
          checked={this.state.chamber === 'house'}
          onChange={this.onRadioSelection}
        />
        <label>House</label>
        <br />
        <button id="js-get-info" onClick={() => this.getData()}>
          get-info
        </button>
        <textarea name="" id="js-show-info" cols="30" rows="10" />
      </div>
    );
  }
}

export default PurpleOptions;
