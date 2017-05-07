import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/header.jsx';
import StarsTile from './components/stars.jsx';
import AnswersTile from './components/answers.jsx';

ReactDOM.render(
  <div className='container'>
    <Header />
    <div className='clearfix'>
      <StarsTile />
      <buttonTile />
      <AnswersTile />
    </div>
  </div>,
  document.getElementById('root')
);
