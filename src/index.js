import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/header.jsx';
import StarsTile from './components/stars.jsx';

ReactDOM.render(
  <div className='container'>
    <Header />
    <div className='clearfix'>
      <StarsTile />
      <buttonTile />
      <answerTile />
    </div>
  </div>,
  document.getElementById('root')
);
