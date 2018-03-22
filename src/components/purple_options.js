import React, { Component } from 'react';
import axios from 'axios';

import DemHouse from './dem_house';
import RepHouse from './rep_house';

class PurpleOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      congressNumber: 115,
      chamber: '',
      senateMembers: [],
      houseMembers: []
    };
    this.onRadioSelection = this.onRadioSelection.bind(this);
  }

  async componentDidMount() {
    const senateResponse = await axios.get(
      // `https://api.propublica.org/congress/v1/115/explanations.json`, congress voting explanations
      `https://api.propublica.org/congress/v1/${
        this.state.congressNumber
      }/senate/members.json`, //https://projects.propublica.org/api-docs/congress-api/members/
      {
        headers: { 'X-API-Key': 'ErXQPoib5ox5eDm1V0gJPguS25miL2ehc0boLHew' }
      }
    );
    const senateData = senateResponse.data.results;
    this.setState({ senateMembers: senateData[0].members });

    const houseResponse = await axios.get(
      // `https://api.propublica.org/congress/v1/115/explanations.json`, congress voting explanations
      `https://api.propublica.org/congress/v1/${
        this.state.congressNumber
      }/house/members.json`, //https://projects.propublica.org/api-docs/congress-api/members/
      {
        headers: { 'X-API-Key': 'ErXQPoib5ox5eDm1V0gJPguS25miL2ehc0boLHew' }
      }
    );
    const houseData = houseResponse.data.results;
    this.setState({ houseMembers: houseData[0].members });
    // console.log(this.state.houseMembers);
  }

  onRadioSelection(changeEvent) {
    this.setState(
      {
        chamber: changeEvent.target.value
      },
      () => console.log(this.state.chamber)
    );
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

        <RepHouse
          chamber={this.state.chamber}
          senate={this.state.houseMembers}
        />
        <DemHouse
          chamber={this.state.chamber}
          house={this.state.houseMembers}
        />
      </div>
    );
  }
}

export default PurpleOptions;
