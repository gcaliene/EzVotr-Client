import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PurpleOptions from './components/purple_options';

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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <PurpleOptions />
        <div className="left dem-blue" />
      </div>
    );
  }
}

export default App;

// One Million Cups,,,, 9 am at the center.
