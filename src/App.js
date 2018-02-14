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
			posts: []
		};
	}

	componentDidMount() {
		axios
			.get(`https://api.propublica.org/congress/v1/115/explanations.json`, {
				headers: { 'X-API-Key': 'ErXQPoib5ox5eDm1V0gJPguS25miL2ehc0boLHew' }
			})
			.then(res => {
				console.log(res);
			});
	}
	render() {
		return (
			<div className="App">
				<button id="js-get-info">get-info</button>
				<textarea name="" id="js-show-info" cols="30" rows="10" />
			</div>
		);
	}
}

export default App;
