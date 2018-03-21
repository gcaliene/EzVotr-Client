import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PurpleOptions from './components/purple_options';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <PurpleOptions />
        <div className="left dem-blue" />
      </div>
    );
  }
}

export default App;
