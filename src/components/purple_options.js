import React, { Component } from 'react';
import axios from 'axios';

class PurpleOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      congressNumber: 115,
      chamber: 'senate',
      senateMembers: [],
      houseMembers: []
    };
    this.getData = this.getData.bind(this);
    this.onRadioSelection = this.onRadioSelection.bind(this);
  }

  async getData() {
    console.log(this.state);
    const response = await axios.get(
      // `https://api.propublica.org/congress/v1/115/explanations.json`, congress voting explanations
      `https://api.propublica.org/congress/v1/${this.state.congressNumber}/${
        this.state.chamber
      }/members.json`, //https://projects.propublica.org/api-docs/congress-api/members/
      {
        headers: { 'X-API-Key': 'ErXQPoib5ox5eDm1V0gJPguS25miL2ehc0boLHew' }
      }
    );
    const data = response.data.results;
    // console.log(data[0].members);
    if (this.state.chamber === 'senate') {
      this.setState({ senateMembers: data[0].members });
      console.log(this.state.senateMembers);
    } else if (this.state.chamber === 'house') {
      this.setState({ houseMembers: data[0].members });
      console.log(this.state.houseMembers);
    }
    console.log(this.state.chamber);
  }

  onRadioSelection(changeEvent) {
    this.setState({
      chamber: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className="center">
        <p>
          <input
            name="congress"
            className=""
            type="radio"
            id="contactChoice1"
            value="senate"
            checked={this.state.chamber === 'senate'}
            onChange={e => this.onRadioSelection(e)}
          />
          <label htmlFor="contactChoice1">Senate</label>
        </p>
        <p>
          <input
            name="congress"
            className=""
            type="radio"
            id="contactChoice2"
            value="house"
            checked={this.state.chamber === 'house'}
            onChange={e => this.onRadioSelection(e)}
          />
          <label htmlFor="contactChoice2">House</label>
        </p>
        <br />
        <button
          id="js-get-info"
          className="btn waves-effect waves-light"
          onClick={() => this.getData()}
        >
          get-info
        </button>

        <textarea name="" id="js-show-info" cols="30" rows="10" />
      </div>
    );
  }
}

export default PurpleOptions;
