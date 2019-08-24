import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// load style CSS in bundle to retrieve it with webpack plugin
require('./style.css');

ReactDOM.render(<App />, document.getElementById('housemania'));
