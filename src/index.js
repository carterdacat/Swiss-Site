import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/header';
import Body from './Body/body';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
