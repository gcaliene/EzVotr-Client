import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PurpleOptions from './components/purple_options';

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
