import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
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
