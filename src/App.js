import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton'; // add

import PurpleOptions from './components/purple_options';
import './App.css';

//https://www.propublica.org/nerds/congress-api-bill-subjects-personal-explanations-and-sunsetting-sunlight
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
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<PurpleOptions />
				<RaisedButton label="Material UI" />

				<div className="left dem-blue" />
			</MuiThemeProvider>
		);
	}
}

export default App;

// One Million Cups,,,, 9 am at the center.
