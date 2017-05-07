import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/header.jsx'

ReactDOM.render(
  <div className="container">
    <Header />
    <startsTile />
    <buttonTile />
    <answerTile />
  </div>,
  document.getElementById('root')
);
