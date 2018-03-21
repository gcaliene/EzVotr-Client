import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import injectTapEventPlugin from 'react-tap-event-plugin'; // add

ReactDOM.render(<App />, document.getElementById('root'));
injectTapEventPlugin();

registerServiceWorker();
