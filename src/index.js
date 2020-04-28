import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/header.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Header />,
    document.getElementById('root')
);

serviceWorker.register();
