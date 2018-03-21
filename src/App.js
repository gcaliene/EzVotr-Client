import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PurpleOptions from './components/purple_options';
import './App.css';

//https://www.propublica.org/nerds/congress-api-bill-subjects-personal-explanations-and-sunsetting-sunlight

// const muiTheme = getMuiTheme({
// 	palette: {
// 		textColor: cyan500
// 	},
// 	appBar: {
// 		height: 50
// 	}
// });

class App extends Component {
	render() {
		return (
			<div>
				<PurpleOptions />
				<RaisedButton label="Material UI" />

				<div className="left dem-blue" />
			</div>
		);
	}
}

export default App;

// One Million Cups,,,, 9 am at the center.
