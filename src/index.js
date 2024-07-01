// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/main.scss'; // Use alias for styles directory
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
