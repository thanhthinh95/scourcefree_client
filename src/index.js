import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import config from 'react-global-configuration';
import language from  './language.json'
import './index.css';
import Home from './pages/home/application';
import * as serviceWorker from './serviceWorker';

config.set(language)

ReactDOM.render((
    <BrowserRouter>
        <Home></Home>
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
