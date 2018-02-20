import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

// $('#js-get-info').on('click', () => {
// 	$.ajax({
// 		type: 'GET',
// 		url: 'https://api.propublica.org/congress/v1/115/explanations.json',
// 		headers: {
// X-API-Key:ErXQPoib5ox5eDm1V0gJPguS25miL2ehc0boLHew
// 			// 'X-API-Key': 'ErXQPoib5ox5eDm1V0gJPguS25miL2ehc0boLHew'
// 		},
// 		success: function(response) {
// 			console.log(response);
// 		},
// 		error: function(e) {
// 			console.log(e);
// 		}
// 	});
// });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      congressNumber: 115,
      chamber: 'senate',
      senateMembers: [],
      houseMembers: []
    };
  }

  async getData() {
    // console.log(this.state);
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
    } else if (this.state.chamber === 'house') {
      this.setState({ houseMembers: data[0].members });
    }
    console.log(this.state.houseMembers);
    console.log(this.state.senateMembers);
  }

  render() {
    return (
      <div className="App">
        <button id="js-get-info" onClick={() => this.getData()}>
          get-info
        </button>
        <textarea name="" id="js-show-info" cols="30" rows="10" />
      </div>
    );
  }
}

export default App;
