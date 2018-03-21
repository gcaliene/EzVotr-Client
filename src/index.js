import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App className="deep-purple darken-4" />,
  document.getElementById('root')
);

registerServiceWorker();
