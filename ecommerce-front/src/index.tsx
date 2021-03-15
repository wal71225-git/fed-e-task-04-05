import React from 'react';
import ReactDOM from 'react-dom';
import { API } from './config';
import Routes from './Routes';
console.log(API)
ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

